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
  
  samples.forEach(sample => {
    const wrapper = document.createElement('div');
    wrapper.className = 'sound-card';
  
    const title = document.createElement('div');
    title.className = 'sound-title';
    title.textContent = sample.name;
  
    const btn = document.createElement('button');
    btn.className = 'sound-btn';
    btn.textContent = '▶ Play';
  
    const duration = document.createElement('div');
    duration.className = 'sound-duration';
    duration.textContent = 'Loading...';
  
    const audio = new Audio(`sounds/${sample.file}`);
    audio.addEventListener('loadedmetadata', () => {
      duration.textContent = `${audio.duration.toFixed(1)} sec`;
    });
  
    btn.addEventListener('click', () => {
      audio.currentTime = 0;
      audio.play();
    });
  
    wrapper.appendChild(title);
    wrapper.appendChild(btn);
    wrapper.appendChild(duration);
    soundboard.appendChild(wrapper);
  });
  