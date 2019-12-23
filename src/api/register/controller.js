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
    if (!RegisterService.validatePassword(password) || !RegisterService.validateMail(mail)) {
      return res.status(400).json({ msg: 'Invalid user or password' });
    }
    logger.info(`Creating user ${mail}`);
    await UserService.createUser({ mail, password });
    return res.status(200).json({ message: 'User created' });
  } catch (err) {
    return res.status(500).json(err);
  }
}
