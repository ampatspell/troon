import { Gpio } from 'onoff';
import * as OS from 'node:os';

const isLinux = OS.type() === 'Linux';

export const startGpio = (onPlay: () => void) => {
  if (!isLinux) {
    return;
  }
  const ledpin = new Gpio(538, 'out');
  const pushpin = new Gpio(516, 'in', 'both');

  pushpin.watch(async (err, value) => {
    if (value === 1) {
      onPlay();
      await ledpin.write(value);
    }
  });
};
