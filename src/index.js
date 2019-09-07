import '@babel/polyfill';
import 'source-map-support/register';

import http from 'http';
import express from 'express';

import env from './config/env';
import logger from './services/loggers/app';
import bootstrapExpress from './bootstrap/express';
import bootstrapMongoose from './bootstrap/mongoose';

const listenPromise = server => port => new Promise((resolve, reject) => {
  const listener = server.listen(port, err => (err ? reject(err) : resolve(listener)));
});

(async function main() {
  try {
    logger.info('Initializing server');

    const app = express();

    bootstrapExpress(app);

    const server = http.createServer(app);
    const listener = await listenPromise(server)(env.port);

    logger.info(`Listening on port ${listener.address().port} in ${app.get('env')} environment`);

    bootstrapMongoose();
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
}());
