import bcrypt from 'bcrypt';

import * as UserDataService from './data';

/**
 * Get a user.
 *
 * @async
 * @param {Object} $0 - Object as input.
 * @param {string} $0.mail - User mail.
 * @returns {Object} User.
 */
export function fetchUser({ mail } = {}) {
  return UserDataService.fetch({ mail });
}

/**
 * Create a new user.
 *
 * @async
 * @param {Object} $0 - Object as input.
 * @param {string} $0.mail - User mail.
 * @param {string} $0.password - User password.
 * @returns {Object} User.
 */
export function createUser({ mail, password }) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds)
    .then(hash => UserDataService.save(mail, { mail, hash }));
}
