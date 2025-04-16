// === Select all required DOM elements ===
const rgbValue = document.getElementById("rgb-value");
const colorOptions = document.querySelector(".color-options");
const feedback = document.querySelector(".feedback");
const scoreDisplay = document.getElementById("score");
const livesDisplay = document.getElementById("lives");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

// === Game State Variables ===
let correctAnswer = ""; // Will store the correct color string
let score = 0;
let lives = 3;

// === Generate a random RGB string ===
function generateRGB() {
  const r = Math.floor(Math.random() * 256); // Red 0–255
  const g = Math.floor(Math.random() * 256); // Green 0–255
  const b = Math.floor(Math.random() * 256); // Blue 0–255
  return `rgb(${r}, ${g}, ${b})`; // Return as a string
}

// === Generate 3 color options and pick one correct ===
function generateOptions() {
  const colors = [generateRGB(), generateRGB(), generateRGB()]; // Three options
  correctAnswer = colors[Math.floor(Math.random() * colors.length)]; // Random correct choice
  rgbValue.textContent = correctAnswer; // Show the RGB value to guess

  colorOptions.innerHTML = ""; // Clear previous options

  // Create and display buttons for each color
  colors.forEach((color) => {
    const btn = document.createElement("button");
    btn.classList.add("color-square");
    btn.style.backgroundColor = color;
    btn.addEventListener("click", () => handleGuess(color, btn)); // Add click event
    colorOptions.appendChild(btn);
  });
}

// === Handle user guess ===
function handleGuess(color, btn) {
  const buttons = document.querySelectorAll(".color-square");
  buttons.forEach((b) => (b.disabled = true)); // Disable all buttons after guess

  if (color === correctAnswer) {
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "#8ef6e4"; // Teal color
    score++; // Increase score
  } else {
    feedback.textContent = "❌ Wrong!";
    feedback.style.color = "#ff6b6b"; // Red color
    lives--; // Lose a life
  }

  updateUI(); // Update score and lives

  // Check if game is over
  if (lives <= 0) {
    feedback.textContent = `Game Over! Final Score: ${score}`;
    restartBtn.classList.remove("hidden"); // Show restart
    nextBtn.classList.add("hidden"); // Hide next
  } else {
    nextBtn.classList.remove("hidden"); // Show next for next round
  }
}

// === Update score and lives on screen ===
function updateUI() {
  scoreDisplay.textContent = score;
  livesDisplay.textContent = lives;
}

// === Restart game from scratch ===
function restartGame() {
  score = 0;
  lives = 3;
  feedback.textContent = "";
  restartBtn.classList.add("hidden");
  updateUI();
  generateOptions();
}

// === Event Listeners for buttons ===
nextBtn.addEventListener("click", () => {
  generateOptions();
  feedback.textContent = ""; // Clear feedback
  nextBtn.classList.add("hidden"); // Hide next again
});

restartBtn.addEventListener("click", restartGame); // Restart game

// === Start the first round when page loads ===
generateOptions();
