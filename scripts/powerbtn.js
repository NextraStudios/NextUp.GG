    document.getElementById('powerBtn').addEventListener('click', () => {
      if (window.electronAPI?.closeApp) {
        window.electronAPI.closeApp();
      } else {
        console.error("window.electronAPI.closeApp not found");
      }
    });