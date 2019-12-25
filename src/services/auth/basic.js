import { BasicStrategy } from 'passport-http';
import bcrypt from 'bcrypt';

import logger from 'services/loggers/api';
import * as UserService from 'services/user';

export default new BasicStrategy(async (username, password, done) => {
  try {
    const user = await UserService.fetchUser({ mail: username });
    if (!user) {
      logger.warn(`Login attempt for unknown user ${username}`);
      return done(null, false, { msg: 'Unauthorized user' });
    }

    return bcrypt.compare(password, user.hash).then((res) => {
      if (res === true) {
        return done(null, user);
      }
      logger.warn(`Invalid password for user ${username}`);
      return done(null, false, { msg: 'Unauthorized user' });
    });
  } catch (err) {
    return done(new Error(err));
  }
});
