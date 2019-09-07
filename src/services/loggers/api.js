import chalk from 'chalk';
import tracer from 'tracer';

export default tracer.colorConsole({
  format: '{{timestamp}} <api:{{title}}> {{path}}:{{line}} -- {{message}}',
  dateformat: 'yyyy-mm-dd HH:MM:ss.L',
  filters: {
    info: chalk.cyanBright,
    warn: chalk.yellowBright,
    error: chalk.redBright,
  },
  preprocess(data) {
    data.path = data.path
      .replace(/[\\/]*webpack:[\\/]+/i, '');
  },

  transport(data) {
    // eslint-disable-next-line no-console
    console.log(data.output);
  },
});
