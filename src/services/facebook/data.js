import DataModel from './model';

/**
 * Retrieve facebook posts.
 *
 * @async
 * @returns {Object} FacebookPosts.
 */
export function list() {
  return DataModel.find({});
}
