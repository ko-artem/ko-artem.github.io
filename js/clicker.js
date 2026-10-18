let count = 0;
const display = document.getElementById("count");

function addClick() {
  count++;
  display.textContent = count;
}

function resetCount() {
  count = 0;
  display.textContent = count;
}

document.getElementById("add").addEventListener("click", addClick);
document.getElementById("reset").addEventListener("click", resetCount);