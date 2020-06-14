import graphqlHttp from 'express-graphql';
const { makeExecutableSchema } = require('graphql-tools');
import glue from 'schemaglue';

import client from '../redis';

const isDevelopmentMode = process.env.MODE === 'develop';

const graphiQlPath = isDevelopmentMode && '/api/graphiql';
const graphQlPath = 'src/graphql';

const { schema, resolver } = glue(graphQlPath, { ignore: [`${graphQlPath}/index.js`, `${graphQlPath}/merge.js`] });

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers: resolver
});

const connectGraphQl = (app) =>
  app.all(
    ['/api/v1', graphiQlPath],
    graphqlHttp((req, res) => ({
      schema: executableSchema,
      context: { req, res, client },
      graphiql: isDevelopmentMode && {
        endpoint: graphiQlPath
      }
    }))
  );

module.exports = connectGraphQl;
