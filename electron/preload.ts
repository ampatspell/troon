import { ipcRenderer } from 'electron';

let handler: (() => void) | undefined;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).electron = {
  onPlay: (next: () => void) => {
    handler = next;
  },
};

ipcRenderer.addListener('play', () => {
  handler?.();
});

// const channel = new MessageChannel();

// const local = channel.port1;
// const remote = channel.port2;

// ipcRenderer.postMessage('port', null, [remote]);

// contextBridge.exposeInMainWorld("electron", {
//   post: (type: string, args: Record<string, unknown>) => local.postMessage({ type, args }),
//   on: (cb: (type: string, args: Record<string,unknown>) => void) => {
//     remote.addEventListener('message', (event) => {
//       console.log(event.data);
//       try {
//         const string = event.data;
//         const json = JSON.parse(string);
//         if(json['type']) {
//           cb(json['type'], json['args'] ?? {});
//         }
//       } catch(err: unknown) {
//         console.log(err instanceof Error ? err.stack : err);
//       }
//     });
//   },
// });
