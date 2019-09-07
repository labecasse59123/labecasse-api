import mongoose from 'mongoose';
import config from 'config/env';

const { db: { url, options } } = config;

export default () => new Promise((resolve, reject) => {
  mongoose.connection.once('open', resolve);
  mongoose.connection.once('error', reject);
  mongoose.connect(url, options);
});
