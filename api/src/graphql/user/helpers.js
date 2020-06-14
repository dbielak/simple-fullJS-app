import User from '../../database/models/user';
import { crypt } from '../../helpers/crypt';

export const addUser = async (args) => {
  if (!args.password) {
    args.password = await crypt(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
  }

  await User.findOneAndUpdate({ email: args.email }, { ...args }, { upsert: true, new: true }, (err) => {
    if (err) throw graphqlError(500, err);
  });

  const data = {
    password: args.password,
    email: args.email
  };

  sendEmail(data, 'new_user');
};

export const editUser = async (args) => {
  await User.findOneAndUpdate({ email: args.email }, { ...args }, { upsert: true, new: true }, (err) => {
    if (err) throw graphqlError(500, err);
  });

  return true;
};
