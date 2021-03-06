import validator from 'validator';
import logger from 'services/loggers/api';

import * as RegisterDataService from './data';

/**
 * Create a resource.
 *
 * @param {Object} resource - Resource data.
 * @param {Object} resource.key - Resource key.
 * @returns {Object} Resource.
 */
export function createResource({ key } = {}) {
  const resource = {
    key,
  };

  return resource;
}

/**
 * Get a resource.
 *
 * @async
 * @param {Object} $0 - Object as input.
 * @param {string} $0.key - Resource key.
 * @returns {Object} Resource.
 */
export function fetchResource({ key } = {}) {
  return RegisterDataService.fetch({ key });
}

/**
 * Save the resource.
 *
 * @async
 * @param {Object} $0 - Expects object as param.
 * @param {string} $0.key - Unique id of the resource.
 * @returns {Object} The resource.
 */
export function saveResource({ key, ...resource } = {}) {
  return RegisterDataService.save(key, resource);
}

/**
 * Validate the password.
 * Must contains at least 1 lowercase, 1 uppercase, 1 number, 1 special char.
 * Must be at least 8 characters.
 *
 * @param {string} password - The password to validate.
 */
export function validatePassword(password) {
  logger.info('Validating password');
  try {
    return validator.matches(`${password}`,
    /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~])[a-zA-Z0-9!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]{8,}$/); // eslint-disable-line
  } catch (err) {
    logger.error(err);
    return false;
  }
}
/**
 * Validate the mail.
 *
 * @param {string} mail - The mail to validate.
 */
export function validateMail(mail) {
  logger.info(`Validating email: ${mail}`);
  try {
    return validator.isEmail(`${mail}`);
  } catch (err) {
    logger.error(err);
    return false;
  }
}
