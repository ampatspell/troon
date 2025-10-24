import { Gpio } from 'onoff';
import * as OS from 'node:os';

const isLinux = OS.type() === 'Linux';

export const startGpio = () => {
  if(!isLinux) {
    return;
  }
  const ledpin = new Gpio(538, 'out');
  const pushpin = new Gpio(516, 'in', 'both');

  pushpin.watch(async (err, value) => {
    console.log(err, value);
    if (value === 1) {
      const next = await ledpin.read();
      await ledpin.write(next === 0 ? 1 : 0);
    }
  });
};
