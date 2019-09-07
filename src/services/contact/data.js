import DataModel from './model';

/**
 * Save a contact message.
 *
 * @async
 * @param {Object} contact - Contact data.
 * @returns {Object} Contact.
 */
export function save({ mail, message }) {
  return DataModel.create({ mail, message });
}
