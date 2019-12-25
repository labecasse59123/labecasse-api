import { jwtFactory } from 'services/auth/jwt';
import logger from 'services/loggers/api';

/**
 * Login user and provide jwt.
 *
 * @param {Object} req - Request stream.
 * @param {Object} res - Response stream.
 */
export function post(req, res) {
  const { user } = req;
  if (!user) {
    logger.warn('Login attempt for undefined user');
    return res.status(400).json({ msg: 'User is undefined' });
  }
  logger.info(`Generating JWT for ${user.mail}`);
  const jwt = jwtFactory(user);
  return res.json(jwt);
}
