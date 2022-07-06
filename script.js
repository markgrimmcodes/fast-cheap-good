let checkboxes = document.querySelectorAll("input");
let checkedBoxes = [];

for (let checkbox of checkboxes) {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      if (checkedBoxes.length >= 2) {
        // Remove recently checked item from array + uncheck
        const lastCheckbox = checkedBoxes.pop();
        lastCheckbox.checked = false;
      }

      // add new item
      checkedBoxes.push(checkbox);
    } else {
      // remove unchecked item from array
      const index = checkedBoxes.indexOf(checkbox);
      checkedBoxes.splice(index, 1);
    }
  });
}
