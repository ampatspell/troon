import { Gpio } from 'onoff';

export const startGpio = () => {
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
