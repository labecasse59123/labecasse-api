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
