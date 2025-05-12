    function saveCommands() {
      const openCommand = document.getElementById('openCommand').value;
      const closeCommand = document.getElementById('closeCommand').value;
      const joinCommand = document.getElementById('joinCommand').value;

      const openCommandToggle = document.getElementById('openCommandToggle').checked;
      const closeCommandToggle = document.getElementById('closeCommandToggle').checked;
      const joinCommandToggle = document.getElementById('joinCommandToggle').checked;

      // Log the custom commands and their status (you can replace this with actual saving logic)
      console.log("Custom Commands Saved:");
      console.log("Open Command: " + openCommand + " (Enabled: " + openCommandToggle + ")");
      console.log("Close Command: " + closeCommand + " (Enabled: " + closeCommandToggle + ")");
      console.log("Join Command: " + joinCommand + " (Enabled: " + joinCommandToggle + ")");
      
      alert('Commands have been saved!');
    }