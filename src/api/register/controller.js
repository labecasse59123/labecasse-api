/**
 * List resources.
 *
 * @param {Object} req - Request stream.
 * @param {Object} res - Response stream.
 */
export function post(req, res) {
  return res.status(200).json([{
    key: 'value',
  }]);
}
