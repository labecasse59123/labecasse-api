/**
 * Get a var from the environment. Resolves the prefix.
 *
 * @param {string} name - Var name.
 * @returns {any} Env var value.
 */
function getEnvVar(name) {
  return process.env[`${process.env.ENV_PREFIX}${name}`];
}

export default {
  app: {
    version: process.env.npm_package_version,
    env: getEnvVar('ENV') || process.env.NODE_ENV,
  },

  port: +(getEnvVar('PORT') || 9000),

  db: {
    url: getEnvVar('DB_URL'),
    options: {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
  },
  jwt: {
    secret: getEnvVar('JWT_SECRET'),
    issuer: getEnvVar('JWT_ISSUER'),
    audience: getEnvVar('JWT_AUDIENCE'),
  },
};
