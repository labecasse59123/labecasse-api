module.exports = {
  // Tell eslint not to seek a eslintrc file in parent folders.
  root: true,

  env: {
    es6: true,
    jest: true,
  },

  plugins: ['jsdoc'],

  extends: 'airbnb-base',

  parser: 'babel-eslint',

  rules: {
    // On linebreak, enforce operator on the new line, except for the '?' of a ternary expression.
    'operator-linebreak': [
      'error',
      'before',
      { overrides: { '?': 'after' } },
    ],

    // Prevent multiple empty lines. Allow 1 at EOF, 0 at BOF.
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],

    // Allow ++ operator.
    'no-plusplus': 0,

    // Enforce single quotes except for strings with single quotes in body.
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],

    // Allow assigning in argument if object.
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],

    // Allow named export without default export.
    'import/prefer-default-export': 0,

    // JSDoc specific rules.
    // Set most rules as warnings instead of errors.
    'jsdoc/check-param-names': 1,
    'jsdoc/check-tag-names': 1,
    'jsdoc/check-types': 1,
    'jsdoc/newline-after-description': 1,
    'jsdoc/no-undefined-types': 1,
    'jsdoc/require-description-complete-sentence': 1,
    'jsdoc/require-hyphen-before-param-description': 1,
    'jsdoc/require-param': 1,
    'jsdoc/require-param-description': 1,
    'jsdoc/require-param-name': 1,
    'jsdoc/require-param-type': 1,
    'jsdoc/require-returns-description': 1,
    'jsdoc/require-returns-type': 1,
    'jsdoc/valid-types': 1,

    // Disable these rules.
    'jsdoc/require-description': 0,
    'jsdoc/require-example': 0,

    'require-jsdoc': [
      1,
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: true,
        },
      },
    ],
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
        ],

        paths: [
          './src/',
        ],
      },
    },

    jsdoc: {
      additionalTagNames: {
        customTags: ['async'],
      },
    },
  },
};
