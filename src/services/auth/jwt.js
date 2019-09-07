import { Strategy, ExtractJwt } from 'passport-jwt';
import jwt from 'jsonwebtoken';

import * as UserService from 'services/user';
import config from 'config/env';

const { jwt: { secret, issuer, audience } } = config;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret,
  issuer,
  audience,
};

export const jwtFactory = user => jwt.sign({ mail: user.mail }, secret, {
  issuer,
  audience,
  expiresIn: '1d',
});

export default new Strategy(opts, async (jwtPayload, done) => {
  if (jwtPayload.mail) {
    try {
      const user = await UserService.fetchUser({ mail: jwtPayload.mail });
      return done(null, user);
    } catch (err) {
      return done(new Error(err));
    }
  }
  return done(null, false);
});
