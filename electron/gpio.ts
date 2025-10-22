import { Gpio } from "onoff";

export const startGPIO = async () => {
  const ledpin = new Gpio(26, 'out');
  const pushpin = new Gpio(4, 'in', 'both');

  pushpin.watch((err, value) => {
    console.log(err, value, value?.toFixed(2));
    ledpin.write(value);
  });
}
