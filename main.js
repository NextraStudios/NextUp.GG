const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let queue = [];

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  win.loadFile('index.html');
}

ipcMain.on('joinQueue', (event, playerName) => {
  if (playerName && !queue.includes(playerName)) {
    queue.push(playerName);
    event.reply('updateQueue', queue);
  }
});

ipcMain.on('leaveQueue', (event, playerName) => {
  queue = queue.filter(player => player !== playerName);
  event.reply('updateQueue', queue);
});

ipcMain.on('openQueue', (event) => {
  event.reply('queueStatus', { status: 'open' });
});

ipcMain.on('closeQueue', (event) => {
  event.reply('queueStatus', { status: 'closed' });
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
