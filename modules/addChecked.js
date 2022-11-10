// ADD Attribute 'Checked' for radio button
export const checkbox = document.querySelectorAll('.radio');
function removeCheked() {
  checkbox.forEach(item => {
    item.removeAttribute("checked", "checked");
  });
}
export function addChecked() {
  checkbox.forEach(items => {
    items.addEventListener('click', (e) => {
      const target = e.target;
      if (target === items) {
        removeCheked();
        target.setAttribute("checked", "checked");
      }
    });
  });
};
