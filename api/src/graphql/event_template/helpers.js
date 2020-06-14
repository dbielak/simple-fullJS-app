import EventTemplate from '../../database/models/eventTemplate';

export const addView = async ({ eventTemplateId }) =>
  await EventTemplate.findOneAndUpdate({ _id: eventTemplateId }, { $inc: { views: 1 } }, { upsert: true, new: true }, (err) => {
    if (err) throw graphqlError(500, err);
  });

export const addRedirect = async ({ eventTemplateId }) =>
  await EventTemplate.findOneAndUpdate({ _id: eventTemplateId }, { $inc: { redirects: 1 } }, { upsert: true, new: true }, (err) => {
    if (err) throw graphqlError(500, err);
  });
