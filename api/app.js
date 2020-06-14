import express from 'express';

import connectDb from './src/database/mongo';
import connectGraphQl from './src/graphql';
import setApplicationSettings from './src/settings';
import setApplicationCrons from './src/crons';
import isAuth from './src/middleware/is-auth';
import apiRoute from './src/routes/api';

const app = express();

/**
 * application crons
 */
setApplicationCrons();

/**
 * application settings
 */
setApplicationSettings(app);

/**
 * Auth middleware
 */
app.use(isAuth);

/**
 * all website routes
 */
app.use('/api', apiRoute);

/**
 * grapql connect
 */
connectGraphQl(app);

/**
 * mongoo connect
 */
connectDb(app);
