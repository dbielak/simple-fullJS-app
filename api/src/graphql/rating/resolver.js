import { graphqlError } from 'graphql-serverless';

import { addNewRating } from './helpers';
import { dateToString } from '../../helpers/date';
import { addToRedis, getFromRedis, removeFromRedis } from '../../helpers/redis';
import Rating from '../../database/models/rating';
import User from '../../database/models/user';

exports.resolver = {
  Query: {
    async ratings(_, {}, { client }) {
      try {
        let ratings;
        const redisResult = await getFromRedis(client, 'all_ratings');

        if (redisResult) {
          result = JSON.parse(redisResult);
        } else {
          ratings = await Rating.find();

          if (ratings) {
            await addToRedis(client, ['all_ratings'], ratings);
          } else {
            throw graphqlError(404, `Have no ratings yet`);
          }
        }

        return ratings;
      } catch (err) {
        throw graphqlError(500, `Something went wrong`);
      }
    }
  },

  Mutation: {
    async addRating(_, { RatingInput }, { client }) {
      try {
        let userDocId;

        const user = await User.findOne({ email: RatingInput.authorEmail });

        if (user) {
          userDocId = user.id;
        }

        const addedRating = addNewRating({
          ...RatingInput,
          user: userDocId
        });

        sendEmail({ ...addedRating }, 'rating_added');

        await removeFromRedis(client, ['all_ratings']);

        return {
          ...addedRating._doc,
          _id: addedRating.id,
          dateAdded: dateToString(addedRating.dateAdded)
        };
      } catch {
        throw graphqlError(500, `Something went wrong`);
      }
    },

    async moderateRating(_, { ratingId }, { req, client }) {
      const { isAuth, userId } = req;

      if (!isAuth || !userId) {
        throw graphqlError(403, `No permissions to access`);
      }

      try {
        const rating = await Rating.findOneAndUpdate(
          { ratingId },
          {
            status: 'active'
          },
          { upsert: true, useFindAndModify: false },
          (err) => {
            if (err) throw graphqlError(500, err);
          }
        );

        await removeFromRedis(client, ['all_ratings']);

        return {
          ...rating._doc,
          _id: rating.id
        };
      } catch {
        throw graphqlError(500, `Something went wrong`);
      }
    }
  }
};
