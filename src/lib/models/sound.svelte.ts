export class Playing {
  sounds = $state<Sound[]>([]);

  add(sound: Sound) {
    this.sounds = [...this.sounds, sound];
  }

  remove(sound: Sound) {
    this.sounds = this.sounds.filter((curr) => curr !== sound);
  }

  fadeExcept(self: Sound) {
    this.sounds.forEach((sound) => {
      if (sound !== self) {
        sound.fade();
      }
    });
  }
}

export const playing = new Playing();

export class Sound {
  private readonly audio: HTMLAudioElement;

  constructor(public readonly name: string) {
    this.audio = new Audio(`/sounds-2/${name}.mp3`);
    this.audio.addEventListener('play', () => playing.add(this));
    this.audio.addEventListener('pause', () => this.onDone());
    this.audio.addEventListener('ended', () => this.onDone());
  }

  private _fade: ReturnType<typeof setInterval> | undefined;

  onDone() {
    clearInterval(this._fade);
    this._fade = undefined;
    playing.remove(this);
  }

  fade() {
    if (this._fade) {
      return;
    }

    const tick = 50;
    const delta = tick / 500; // ms

    this._fade = setInterval(() => {
      if (this.audio.volume <= 0) {
        this.onDone();
      }
      this.audio.volume = Math.max(this.audio.volume - delta, 0);
    }, tick);
  }

  play() {
    playing.fadeExcept(this);
    this.audio.volume = 1;
    this.audio.play();
  }
}
