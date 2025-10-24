import { contextBridge, ipcRenderer } from 'electron';
import type { ElectronGlobal } from './types';

contextBridge.exposeInMainWorld('electron', {
  onPlay: (handler: () => void) => {
    ipcRenderer.addListener('play', () => {
      handler();
    });
  },
} satisfies ElectronGlobal);
