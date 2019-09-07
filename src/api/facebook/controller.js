import * as FacebookService from 'services/facebook';

/**
 * List posts in facebook page.
 *
 * @param {Object} req - Request stream.
 * @param {Object} res - Response stream.
 */
export async function list(req, res) {
  const facebookPosts = await FacebookService.getFacebookPosts();
  return res.status(200).json(facebookPosts);
}
