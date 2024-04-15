/// Get all the checkboxes
let checkboxes = document.querySelectorAll('#myChecklist input[type="checkbox"]');

// Load saved state from localStorage
checkboxes.forEach(checkbox => {
  let savedState = localStorage.getItem(checkbox.id);
  checkbox.checked = savedState === 'true' ? true : false;
});

// Add event listener to each checkbox
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      // Checkbox is checked..
      console.log(this.id + ' is checked');
      // Save state to localStorage
      localStorage.setItem(this.id, 'true');
    } else {
      // Checkbox is not checked..
      console.log(this.id + ' is unchecked');
      // Save state to localStorage
      localStorage.setItem(this.id, 'false');
    }
  });
});