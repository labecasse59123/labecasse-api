import { jwtFactory } from 'services/auth/jwt';

/**
 * Login user and provide jwt.
 *
 * @param {Object} req - Request stream.
 * @param {Object} res - Response stream.
 */
export function post(req, res) {
  const jwt = jwtFactory(req.user);
  return res.json(jwt);
}
