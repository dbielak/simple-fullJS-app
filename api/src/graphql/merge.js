import { graphqlError } from 'graphql-serverless';

import Event from '../database/models/event';
import User from '../database/models/user';
import { dateToString } from '../helpers/date';

const event = async (eventIds) => {
  try {
    const events = await Event.find({ _id: { $in: eventIds } });

    return events.map((event) => {
      return transformEvent(event);
    });
  } catch (err) {
    throw graphqlError(500, err);
  }
};

const user = async (userId) => {
  try {
    const user = await User.findById(userId);

    return {
      ...user._doc,
      _id: user.id,
      events: event.bind(this, user._doc.events),
      ratings: rating.bind(this, user._doc.events)
    };
  } catch (err) {
    throw graphqlError(500, err);
  }
};

export const transformEvent = (event) => {
  return {
    ...event._doc,
    _id: event.id,
    dateAdd: dateToString(event.dateAdded),
    user: event.user ? user.bind(this, event.user) : null
  };
};

export const transformUser = (user) => {
  return {
    ...user._doc,
    _id: user.id,
    password: null,
    events: event.bind(this, user._doc.events)
  };
};
