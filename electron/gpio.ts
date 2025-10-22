import { Gpio } from "onoff";

export const startGPIO = async () => {
  const ledpin = new Gpio(538, 'out');
  const pushpin = new Gpio(516, 'in', 'both');

  pushpin.watch((err, value) => {
    console.log(err, value, value?.toFixed(2));
    ledpin.write(value);
  });
}
