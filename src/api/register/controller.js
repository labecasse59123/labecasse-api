import * as UserService from 'services/user';
import * as RegisterService from 'services/register';
import logger from 'services/loggers/api';

/**
 * Create user.
 *
 * @param {Object} req - Request stream.
 * @param {Object} res - Response stream.
 */
export async function post(req, res) {
  try {
    const { mail, password } = req.body;
    logger.info(`Register attempt with user [${mail}]`);
    if (!RegisterService.validatePassword(password) || !RegisterService.validateMail(mail)) {
      return res.status(400).json({ msg: 'Invalid user or password' });
    }
    logger.info(`Checking for existing user ${mail}`);
    const user = await UserService.fetchUser({ mail });
    if (user) {
      logger.error(`Attempt to register for existing user: ${mail}`);
      return res.status(403).json({ msg: 'User already exists' });
    }
    logger.info(`Creating user ${mail}`);
    await UserService.createUser({ mail, password });
    return res.status(200).json({ msg: 'User created' });
  } catch (err) {
    return res.status(500).json(err);
  }
}
