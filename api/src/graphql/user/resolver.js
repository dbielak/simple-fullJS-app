import { graphqlError } from 'graphql-serverless';

import { transformUser } from '../merge';
import { editUser } from './helpers';
import { dateToString } from '../../helpers/date';
import { addToRedis, getFromRedis, removeFromRedis } from '../../helpers/redis';
import User from '../../database/models/user';

exports.resolver = {
  Query: {
    async user(_, { userId }, { client }) {
      try {
        let result;
        const redisResult = await getFromRedis(client, { userId });

        if (redisResult) {
          result = JSON.parse(redisResult);
        } else {
          const user = await User.findOne({ userId });

          if (user) {
            result = transformUser(user);

            await addToRedis(client, { userId }, result);
          } else {
            throw graphqlError(404, `User with id ${userId} does not exist.`);
          }
        }

        return result;
      } catch (err) {
        throw graphqlError(500, `Something went wrong`);
      }
    },

    async users(_, { page, limit, sort }, { client }) {
      try {
        let allUsers;
        const redisResult = await getFromRedis(client, 'all_users');

        if (redisResult) {
          allUsers = JSON.parse(redisResult);
        } else {
          const options = {
            sort: JSON.parse(sort) || { dateAdded: 'asc' },
            page: page || 1,
            limit: limit || 30
          };

          const result = await User.paginate({}, options);

          const users = result.docs.map((user) => {
            return transformUser(user);
          });

          allUsers = {
            itemsList: [...users],
            total: result.total,
            pages: result.pages,
            page: result.page
          };

          await addToRedis(client, 'all_users', allUsers);
        }

        return allUsers;
      } catch (err) {
        throw graphqlError(500, `Something went wrong`);
      }
    }
  },

  Mutation: {
    async addUser(_, { UserInput }, { req, client }) {
      try {
        let userDocId = null;
        let userId = null;
        let status = 'moderate';
        let userEvents = [];

        const author = await User.findOne({ email: OfferInput.email });

        if (author && author.role === 'organizer') {
          status = 'active';
          userDocId = author.id;
          userId = author.userId;
          userEvents = [...author._doc.events];
        }

        const addedEvent = addNewEvent({
          ...OfferInput,
          rewrite: generateRewrite(OfferInput),
          status,
          user: userDocId
        });

        if (author) {
          await editUser({
            userId: userId,
            events: [...userEvents, result._id]
          });
        }

        sendEmail(
          {
            ...addedEvent,
            email: addedEvent.email
          },
          'event_added'
        );

        await addToRedis(client, rewrite, addedEvent);
        await removeFromRedis(client, [{ userId }]);

        return {
          ...addedEvent._doc,
          _id: addedEvent.id,
          dateAdded: dateToString(addedEvent.dateAdded),
          user: transformUser.bind(this, addedEvent)
        };
      } catch {
        throw graphqlError(500, `Something went wrong`);
      }
    },

    async deleteUser(_, {}, { req, client }) {
      const { isAuth, userId } = req;

      if (!isAuth || !userId) {
        throw graphqlError(403, `No permissions to access`);
      }

      try {
        const user = await User.find({ userId });
        const userDocId = event._doc.id;

        await User.deleteOne({ _id: userDocId });

        await removeFromRedis(client, [{ userId }]);

        return {
          ...user._doc,
          _id: userDocId
        };
      } catch {
        throw graphqlError(500, `Something went wrong`);
      }
    },

    async addToFavorite(_, { eventId }, { req, client }) {
      const { isAuth, userId } = req;

      if (!isAuth || !userId) {
        throw graphqlError(403, `No permissions to access`);
      }

      try {
        const event = await Event.findOne({ eventId });

        const user = await User.findOneAndUpdate(
          { eventId },
          {
            $addToSet: {
              favoriteEvents: {
                $each: event.id
              }
            }
          },
          { upsert: true, useFindAndModify: false },
          (err) => {
            if (err) throw graphqlError(500, err);
          }
        );

        await removeFromRedis(client, [{ userId }]);

        return {
          ...user._doc,
          _id: user.id
        };
      } catch {
        throw graphqlError(500, `Something went wrong`);
      }
    }
  }
};
