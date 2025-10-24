import { Sound } from './sound.svelte';
import { rnd } from './utils';

export class Person {
  readonly sounds: Sound[];

  constructor(
    public readonly name: string,
    sounds: string[],
  ) {
    this.sounds = sounds.map((name) => new Sound(name));
  }

  speak() {
    const sounds = this.sounds;
    const idx = rnd(0, sounds.length - 1);
    const sound = sounds[idx];
    sound.play();
  }
}

const names = [...Array(25).keys()].map((_, idx) => `${idx + 1}`.padStart(2, '0'));

const pick = () => {
  return [...Array(15).keys()].map(() => names[rnd(0, 24)]);
};

export const people = [
  new Person('Larijs', pick()),
  new Person('Zeeba', pick()),
  new Person('Fedja', pick()),
  new Person('Kāmīc', pick()),
];
