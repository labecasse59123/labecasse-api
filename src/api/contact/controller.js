import * as ContactService from 'services/contact';

/**
 * Handle message from contact form.
 *
 * @param {Object} req - Request stream.
 * @param {Object} res - Response stream.
 */
export function post(req, res) {
  const { email, message } = req.body;
  return ContactService.createContact({ mail: email, message })
    .then(() => res.status(200).end())
    .catch(err => res.status(500).json(err));
}
