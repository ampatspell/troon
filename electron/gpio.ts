import * as Bridge from './-gpio.cjs';

export const startGPIO = async () => {
  const ledpin = Bridge.GPIO(538, 'out');
  const pushpin = Bridge.GPIO(516, 'in', 'both');

  pushpin.watch(async (err, value) => {
    console.log(err, value);
    if(value === 1) {
      const next = await ledpin.read();
      await ledpin.write(next === 0 ? 1 : 0);
    }
  });

}

// cat /sys/kernel/debug/gpio
