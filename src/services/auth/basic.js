import { BasicStrategy } from 'passport-http';
import bcrypt from 'bcrypt';

import * as UserService from 'services/user';

export default new BasicStrategy(async (username, password, done) => {
  try {
    const user = await UserService.fetchUser({ mail: username });
    if (!user) {
      return done(new Error('Unauthorized user'));
    }

    return bcrypt.compare(password, user.hash).then((res) => {
      if (res === true) {
        return done(null, user);
      }
      return done(new Error('Unauthorized user'));
    });
  } catch (err) {
    return done(new Error(err));
  }
});
