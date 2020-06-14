import { graphqlError } from 'graphql-serverless';

import { transformEvent, transformUser } from '../merge';
import { addNewEvent, generateRewrite } from './helpers';
import { editUser } from '../user/helpers';
import { dateToString } from '../../helpers/date';
import { addToRedis, getFromRedis, removeFromRedis } from '../../helpers/redis';
import Event from '../../database/models/event';
import User from '../../database/models/user';

exports.resolver = {
  Query: {
    async todos(_, { filters, page, limit }, { client }) {
      try {
        let allEvents;
        // const redisResult = await getFromRedis(client, { userId });
        // if (redisResult) {
        //   resultItems = JSON.parse(redisResult);
        // } else {
        const query = JSON.parse(filters);

        const options = {
          page: page || 1,
          limit: limit || 30
        };

        const result = await Event.paginate(query, options);

        const events = result.docs.map((event) => {
          return transformEvent(event);
        });

        allEvents = {
          eventsList: [...events],
          total: result.total,
          pages: result.pages,
          page: result.page
        };

        // await addToRedis(client, { userId }, allEvents);
        // }

        return allEvents;
      } catch (err) {
        throw graphqlError(500, `Something went wrong`);
      }
    }
  },

  Mutation: {
    async addTodo(_, { input }, { client }) {
      try {
        let userDocId = null;
        let userId = null;
        let status = 'moderate';
        let userEvents = [];

        const author = await User.findOne({ email: input.email });

        const rewrite = await generateRewrite(input);

        if (author && author.role === 'organizer') {
          status = 'active';
          userDocId = author.id;
          userId = author.userId;
          userEvents = [...author._doc.events];
        }

        const addedEvent = await addNewEvent({
          ...input,
          rewrite,
          status,
          dateAdded: new Date(),
          user: userDocId
        });

        if (author) {
          await editUser({
            userId: userId,
            events: [...userEvents, result._id]
          });
        }

        // sendEmail(
        //   {
        //     ...addedEvent,
        //     email: addedEvent.email
        //   },
        //   'event_added'
        // );

        // await addToRedis(client, addedEvent.rewrite, addedEvent);
        // await removeFromRedis(client, [{ userId }]);

        return {
          ...addedEvent._doc,
          _id: addedEvent.id,
          dateAdded: dateToString(addedEvent.dateAdded),
          user: transformUser.bind(this, addedEvent)
        };
      } catch (err) {
        console.log(err);
        throw graphqlError(500, `Something went wrong`);
      }
    },

    async deleteTodo(_, { eventId }, { req, client }) {
      const { isAuth, userId } = req;

      if (!isAuth || !userId) {
        throw graphqlError(403, `No permissions to access`);
      }

      try {
        const event = await Event.find({ eventId });
        const eventDocId = event._doc.id;

        await Event.deleteOne({ _id: eventDocId });

        await removeFromRedis(client, [{ eventId }, { userId }]);

        return {
          ...event._doc,
          _id: eventDocId
        };
      } catch {
        throw graphqlError(500, `Something went wrong`);
      }
    }
  }
};
