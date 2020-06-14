import { graphqlError } from 'graphql-serverless';

import Event from '../../database/models/event';

export const addNewEvent = async (args) =>
  await Event.findOneAndUpdate({ rewrite: args.rewrite }, { ...args }, { upsert: true, new: true }, (err) => {
    console.log(err);
    if (err) throw graphqlError(500, err);
  });

export const generateRewrite = async ({ title }) => {
  const formattedTitle = title.replace(/\s+/g, '-').replace(/\./g, '-').replace(/\//g, '-').replace(String.fromCharCode(92), '-').toLowerCase();
  const lastEvent = await Event.find().sort({ _id: -1 }).limit(1);
  const lastEventId = parseInt(lastEvent.eventId) || 0;

  return `${formattedTitle}-ID${lastEventId + 1}`;
};
