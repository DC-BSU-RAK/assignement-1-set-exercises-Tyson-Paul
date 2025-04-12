const rgbValue = document.getElementById("rgb-value");
const colorOptions = document.querySelector(".color-options");
const feedback = document.querySelector(".feedback");
const scoreDisplay = document.getElementById("score");
const livesDisplay = document.getElementById("lives");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

let correctAnswer = "";
let score = 0;
let lives = 3;

function generateRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function generateOptions() {
  const colors = [generateRGB(), generateRGB(), generateRGB()];
  correctAnswer = colors[Math.floor(Math.random() * colors.length)];
  rgbValue.textContent = correctAnswer;

  colorOptions.innerHTML = "";
  colors.forEach((color) => {
    const btn = document.createElement("button");
    btn.classList.add("color-square");
    btn.style.backgroundColor = color;
    btn.addEventListener("click", () => handleGuess(color, btn));
    colorOptions.appendChild(btn);
  });
}

function handleGuess(color, btn) {
  const buttons = document.querySelectorAll(".color-square");
  buttons.forEach((b) => (b.disabled = true));

  if (color === correctAnswer) {
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "#8ef6e4";
    score++;
  } else {
    feedback.textContent = "❌ Wrong!";
    feedback.style.color = "#ff6b6b";
    lives--;
  }

  updateUI();
  if (lives <= 0) {
    feedback.textContent = `Game Over! Final Score: ${score}`;
    restartBtn.classList.remove("hidden");
    nextBtn.classList.add("hidden");
  } else {
    nextBtn.classList.remove("hidden");
  }
}

function updateUI() {
  scoreDisplay.textContent = score;
  livesDisplay.textContent = lives;
}

function restartGame() {
  score = 0;
  lives = 3;
  feedback.textContent = "";
  restartBtn.classList.add("hidden");
  updateUI();
  generateOptions();
}

nextBtn.addEventListener("click", () => {
  generateOptions();
  feedback.textContent = "";
  nextBtn.classList.add("hidden");
});

restartBtn.addEventListener("click", restartGame);

// Initial call
generateOptions();