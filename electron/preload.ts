import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  onPlay: (handler: () => void) => {
    ipcRenderer.addListener('play', () => {
      handler();
    });
  },
});
