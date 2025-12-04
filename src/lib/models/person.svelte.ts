import { Sound } from './sound.svelte';
import { rnd } from './utils';

class Played {
  played: number[] = [];

  add(value: number) {
    const played = this.played;
    if(played.length > 5) {
      played.shift();
    }
    played.push(value);
  }

  try(cb: () => number): number {
    for(;;) {
      const next = cb();
      if(!this.has(next)) {
        this.add(next);
        return next;
      }
    }
  }

  has(value: number) {
    return this.played.includes(value);
  }
}

export class Person {
  readonly sounds: Sound[];
  readonly played: Played;

  constructor(
    public readonly name: string,
    sounds: string[],
  ) {
    this.sounds = sounds.map((name) => new Sound(name));
    this.played = new Played();
  }

  speak() {
    const sounds = this.sounds;
    const idx = this.played.try(() => rnd(0, sounds.length - 1));
    const sound = sounds[idx];
    sound.play();
  }
}

const count = 43;

const names = [...Array(count).keys()].map((_, idx) => `${idx + 1}`.padStart(2, '0'));

export const people = [
  new Person('Sarkana poga', names),
];
