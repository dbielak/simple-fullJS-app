import { graphqlError } from 'graphql-serverless';

import { addToRedis, getFromRedis, removeFromRedis } from '../../helpers/redis';
import EventTemplate from '../../database/models/eventTemplate';

exports.resolver = {
  Query: {
    async eventTemplate(_, { eventTemplateId }, { client }) {
      try {
        let result;

        const redisResult = await getFromRedis(client, { eventTemplateId });

        if (redisResult) {
          result = JSON.parse(redisResult);
        } else {
          const result = await EventTemplate.findById({ _id: eventTemplateId });

          await addToRedis(client, { eventTemplateId }, result);
        }

        return result;
      } catch {
        throw graphqlError(500, `Something went wrong`);
      }
    }
  },

  Mutation: {
    async addView(_, { eventTemplateId }, { client }) {
      try {
        const updatedEventTemplate = await addView(eventTemplateId);

        await addToRedis(client, { eventTemplateId }, updatedEventTemplate);

        return updatedEventTemplate;
      } catch {
        throw graphqlError(500, `Something went wrong`);
      }
    },

    async addRedirect(_, { eventTemplateId }, { client }) {
      try {
        const updatedEventTemplate = await addRedirect(eventTemplateId);

        await addToRedis(client, { eventTemplateId }, updatedEventTemplate);

        return updatedEventTemplate;
      } catch {
        throw graphqlError(500, `Something went wrong`);
      }
    }
  }
};
