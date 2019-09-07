import * as ContactDataService from './data';

/**
 * Create a new contact.
 *
 * @async
 * @param {Object} $0 - Contact as input.
 * @param {string} $0.mail - Contact mail.
 * @param {string} $0.message - Contact message.
 * @returns {Object} Contact.
 */
export function createContact({ mail, message }) {
  return ContactDataService.save({ mail, message });
}
