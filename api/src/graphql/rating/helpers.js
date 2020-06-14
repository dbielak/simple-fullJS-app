import Rating from '../../database/models/rating';

export const addNewRating = async (args) =>
  await Rating.findOneAndUpdate({ email: args.authorEmail }, { ...args }, { upsert: true, new: true }, (err) => {
    if (err) throw graphqlError(500, err);
  });
