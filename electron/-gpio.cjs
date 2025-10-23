// eslint-disable-next-line @typescript-eslint/no-require-imports
const onoff = require('onoff');

const GPIO = (...args) => new onoff.Gpio(...args)

module.exports = {
  GPIO
};
