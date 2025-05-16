const { app, BrowserWindow } = require('electron');
const path = require('path');

let queue = [];

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 800,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  win.loadFile('index.html');
}

require('./core/ipcevents')
require('./core/receiver')
app.whenReady().then(createWindow);