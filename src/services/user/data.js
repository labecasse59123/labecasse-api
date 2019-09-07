import DataModel from './model';

/**
 * Fetch a user.
 *
 * @async
 * @param {Object} $0 - Object as input.
 * @param {string} $0.mail - User mail.
 * @returns {Object} User.
 */
export function fetch({ mail }) {
  return DataModel.findOne({ mail });
}

/**
 * Update a user.
 *
 * @async
 * @param {string} mail - User mail.
 * @param {Object} user - User data.
 * @returns {Object} User.
 */
export function save(mail, user) {
  return DataModel.findOneAndUpdate(
    { mail },
    { $set: user },
    { upsert: true, new: true },
  );
}
