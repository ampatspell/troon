import type { ElectronGlobal } from '$electron/types';

declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

declare global {
  interface Window {
    electron: ElectronGlobal;
  }
}

export {};
