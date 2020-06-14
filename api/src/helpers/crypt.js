import bcrypt from 'bcryptjs';

export const crypt = async (password) => {
  return await bcrypt.hash(password, 12);
};

export const compare = async (password, passwordCompared) => {
  return await bcrypt.compare(password, passwordCompared);
};
