// Get all the checkboxes
let checkboxes = document.querySelectorAll('#myChecklist input[type="checkbox"]');

// Add event listener to each checkbox
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      // Checkbox is checked..
      console.log(this.id + ' is checked');
    } else {
      // Checkbox is not checked..
      console.log(this.id + ' is unchecked');
    }
  });
});