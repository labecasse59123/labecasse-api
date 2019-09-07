import path from 'path';

import chalk from 'chalk';
import tracer from 'tracer';

export default tracer.colorConsole({
  format: '{{timestamp}} <app:{{title}}> {{path}}:{{line}} -- {{message}}',
  dateformat: 'yyyy-mm-dd HH:MM:ss.L',
  filters: {
    info: chalk.cyanBright,
    warn: chalk.yellowBright,
    error: chalk.redBright,
  },

  /**
   * Preprocess the data to log before it is logged.
   *
   * @param {Object} data - Data to log.
   */
  preprocess(data) {
    // In development mode, we know where the sources are (relative to .dev)
    // So we can omit the relative path to get a cleaner log.
    data.path = process.env.NODE_ENV === 'development' ?
      path
        .relative(path.join(__dirname, '../src'), data.path)
        .replace(/\\/g, '/')
      : data.path;
  },

  /**
   * Print logs to console.
   *
   * @param {Object} data - Data to log.
   */
  transport(data) {
    // eslint-disable-next-line no-console
    console.log(data.output);
  },
});
