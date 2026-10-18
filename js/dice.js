function rollDice() {
  const number = Math.floor(Math.random() * 6) + 1;
  document.getElementById("result").textContent = "You rolled: " + number;
}

document.getElementById("roll").addEventListener("click", rollDice);