import DataModel from './model';

/**
 * Fetch a resource.
 *
 * @async
 * @param {Object} $0 - Object as input.
 * @param {string} $0.key - Resource key.
 * @returns {Object} Resource.
 */
export function fetch({ key }) {
  return DataModel.findOne({ key });
}

/**
 * Update a resource.
 *
 * @async
 * @param {string} key - Resource key.
 * @param {Object} resource - Resource data.
 * @returns {Object} Resource.
 */
export function save(key, resource) {
  return DataModel.findOneAndUpdate(
    { key },
    { $set: resource },
    { upsert: true, new: true },
  );
}
