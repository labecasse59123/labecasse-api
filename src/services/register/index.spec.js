import { createResource } from './index';

describe('Resource', () => {
  describe('createResource', () => {
    it('creates a resource', () => {
      expect(createResource({ key: 1 })).toEqual({ key: 1 });
    });
  });
});
