import { graphqlError } from 'graphql-serverless';

import Todo from '../../database/models/todo';

export const addTodo = async (args) =>
  await Todo.findOneAndUpdate({ title: args.rewrite }, { ...args }, { upsert: true, new: true }, (err) => {
    if (err) throw graphqlError(500, err);
  });
