import * as FacebookDataService from './data';

/**
 * List all facebook posts.
 *
 * @async
 * @returns {Object} FacebookPosts.
 */
export function getFacebookPosts() {
  return FacebookDataService.list();
}
