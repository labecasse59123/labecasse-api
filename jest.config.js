module.exports = {
  bail: true,
  verbose: true,

  testEnvironment: 'node',

  // Do not test the node_modules.
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],

  // Absolute import paths.
  modulePaths: [
    '<rootDir>/src',
  ],

  // Transform with babel-jest.
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
  },

  setupFiles: [
    '<rootDir>/.jest/setup.js',
  ],
};
