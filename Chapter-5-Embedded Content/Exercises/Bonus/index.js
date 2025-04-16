// Sample sound data
const samples = [
  { name: "Aha!", file: "ah-ha.mp3" },
  { name: "Back of the Net", file: "back-of-the-net.mp3" },
  { name: "Bang Out of Order", file: "bangoutoforder.mp3" },
  { name: "Dan", file: "dan.mp3" },
  { name: "Email of the Evening", file: "emailoftheevening.mp3" },
  { name: "Hello Partridge", file: "hellopartridge.mp3" },
  { name: "I Ate a Scotch Egg", file: "iateascotchegg.mp3" },
  { name: "I'm Confused", file: "imconfused.mp3" }
];

const soundboard = document.querySelector('.soundboard');

// Map for name-based access
const audioMap = {};

// Dynamically generate buttons and layout
samples.forEach(sample => {
  // Wrapper card
  const wrapper = document.createElement('div');
  wrapper.className = 'sound-card';

  // Title
  const title = document.createElement('div');
  title.className = 'sound-title';
  title.textContent = sample.name;

  // Play button
  const btn = document.createElement('button');
  btn.className = 'sound-btn';
  btn.textContent = '▶ Play';

  // Duration display
  const duration = document.createElement('div');
  duration.className = 'sound-duration';
  duration.textContent = 'Loading...';

  // Create audio object
  const audio = new Audio(`sounds/${sample.file}`);
  audioMap[sample.name.toLowerCase()] = audio;

  // Set duration after metadata loads
  audio.addEventListener('loadedmetadata', () => {
    duration.textContent = `${audio.duration.toFixed(1)} sec`;
  });

  // Button click to play
  btn.addEventListener('click', () => {
    audio.currentTime = 0;
    audio.play();
  });

  // Assemble and add to DOM
  wrapper.appendChild(title);
  wrapper.appendChild(btn);
  wrapper.appendChild(duration);
  soundboard.appendChild(wrapper);
});

// Handle text input play
document.getElementById('playFromText').addEventListener('click', () => {
  const input = document.getElementById('sampleInput').value.trim().toLowerCase();
  const audio = audioMap[input];
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  } else {
    alert("Sample not found! Try exact names like 'Dan' or 'Hello Partridge'");
  }
});
