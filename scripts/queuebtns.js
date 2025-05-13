const players = [];
    let queueLocked = false;

    const queueList = document.getElementById("queueList");
    const emptyMessage = document.getElementById("emptyMessage");

    function updateQueueDisplay() {
      queueList.innerHTML = '';
      if (players.length === 0) {
        emptyMessage.style.display = 'block';
      } else {
        emptyMessage.style.display = 'none';
        players.forEach((player, index) => {
          const li = document.createElement("li");
          li.textContent = `${index + 1}. ${player}`;
          queueList.appendChild(li);
        });
      }
    }


    document.getElementById("lockBtn").onclick = () => {
      queueLocked = !queueLocked;
      const lockBtn = document.getElementById("lockBtn");
      lockBtn.classList.toggle("locked");
    };

    document.getElementById("clearBtn").onclick = () => {
      players.length = 0;
      updateQueueDisplay();
    };

    document.getElementById("nextBtn").onclick = () => {
      if (players.length > 0) {
        players.shift();
        updateQueueDisplay();
      }
    };

    updateQueueDisplay();