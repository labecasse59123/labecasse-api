import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import passport from 'passport';

import basicStrategy from 'services/auth/basic';
import jwtStrategy from 'services/auth/jwt';
import registerRouter from 'api/register';
import loginRouter from 'api/login';
import userRouter from 'api/user';

export default (app) => {
  // Helmet sets some default HTTP headers to secure the app.
  app.use(helmet());

  // Allow cross origin requests.
  // /!\ YOU MIGHT WANT TO CONFIGURE THIS MIDDLEWARE SO ONLY SOME URLS CAN CALL YOUR API.
  app.use(cors());

  // number of spaces when replying with res.json().
  app.set('json spaces, 2');

  // Parsing of application/json.
  app.use(bodyParser.json({ extended: true, limit: 1024 * 1024 }));

  // Parsing of application/x-www-form-urlencoded.
  app.use(bodyParser.urlencoded({ extended: true }));

  // Secure app with passport
  passport.use(basicStrategy);
  passport.use(jwtStrategy);
  app.use(passport.initialize());

  // Api routes.
  app.use('/api/registers', registerRouter);
  app.use('/api/login', passport.authenticate('basic', { session: false }), loginRouter);
  app.use('/api/users', passport.authenticate('jwt', { session: false }), userRouter);
};
