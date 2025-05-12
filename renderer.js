const { ipcRenderer } = require('electron');

const joinQueueBtn = document.getElementById('joinQueueBtn');
const leaveQueueBtn = document.getElementById('leaveQueueBtn');
const openQueueBtn = document.getElementById('openQueueBtn');
const closeQueueBtn = document.getElementById('closeQueueBtn');
const queueContainer = document.getElementById('queue');

let queueStatus = 'closed'; // Initially the queue is closed

joinQueueBtn.addEventListener('click', () => {
  if (queueStatus === 'open') {
    const playerName = prompt('Enter your name to join the queue:');
    if (playerName) {
      ipcRenderer.send('joinQueue', playerName);
    }
  }
});

leaveQueueBtn.addEventListener('click', () => {
  const playerName = prompt('Enter your name to leave the queue:');
  if (playerName) {
    ipcRenderer.send('leaveQueue', playerName);
  }
});

openQueueBtn.addEventListener('click', () => {
  queueStatus = 'open';
  ipcRenderer.send('openQueue');
});

closeQueueBtn.addEventListener('click', () => {
  queueStatus = 'closed';
  ipcRenderer.send('closeQueue');
});

ipcRenderer.on('updateQueue', (event, updatedQueue) => {
  queueContainer.innerHTML = ''; // Clear the current queue
  updatedQueue.forEach(player => {
    const playerElement = document.createElement('div');
    playerElement.className = 'queue-entry';
    playerElement.textContent = player;
    queueContainer.appendChild(playerElement);
  });
});

ipcRenderer.on('queueStatus', (event, { status }) => {
  if (status === 'open') {
    openQueueBtn.disabled = true;
    closeQueueBtn.disabled = false;
    joinQueueBtn.disabled = false;
  } else {
    openQueueBtn.disabled = false;
    closeQueueBtn.disabled = true;
    joinQueueBtn.disabled = true;
  }
});
