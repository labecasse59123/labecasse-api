import * as UserService from 'services/user';

/**
 * Create user.
 *
 * @param {Object} req - Request stream.
 * @param {Object} res - Response stream.
 */
export async function post(req, res) {
  try {
    await UserService.createUser({ mail: req.body.mail, password: req.body.password });
    return res.status(200).json({ msg: 'User created' });
  } catch (err) {
    return res.status(500).json(err);
  }
}

/**
 * Get user.
 *
 * @param {Object} req - Request stream.
 * @param {Object} res - Response stream.
 */
export async function get(req, res) {
  try {
    const { mail, isAdmin, isActive } = await UserService.fetchUser({ mail: req.params.mail });
    return res.status(200).json({ mail, isAdmin, isActive });
  } catch (err) {
    return res.status(500).json(err);
  }
}
