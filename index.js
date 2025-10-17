 // Create floating hearts
    function createFloatingHeart() {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.textContent = ['💕', '💖', '💗', '💓', '💝'][Math.floor(Math.random() * 5)];
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDelay = Math.random() * 3 + 's';
      heart.style.animationDuration = (6 + Math.random() * 4) + 's';
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 10000);
    }

    // Create rose petals
    function createPetal() {
      const petal = document.createElement('div');
      petal.className = 'petal';
      petal.style.left = Math.random() * 100 + 'vw';
      petal.style.animationDelay = Math.random() * 5 + 's';
      petal.style.animationDuration = (8 + Math.random() * 4) + 's';
      document.body.appendChild(petal);

      setTimeout(() => petal.remove(), 12000);
    }

    // Create sparkles
    function createSparkle() {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.top = Math.random() * 100 + 'vh';
      sparkle.style.left = Math.random() * 100 + 'vw';
      sparkle.style.animationDelay = Math.random() * 2 + 's';
      document.body.appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 3000);
    }

    // Generate effects
    setInterval(createFloatingHeart, 800);
    setInterval(createPetal, 600);
    setInterval(createSparkle, 400);

    const overlay = document.getElementById('popupOverlay');
    const openBtn = document.getElementById('enterButton');
    const closeBtn = document.getElementById('closePopup');
    const continueBtn = document.getElementById('continueButton');
    const nameInput = document.getElementById('nameInput');

    openBtn.addEventListener('click', () => {
      overlay.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
      overlay.style.display = 'none';
    });

    continueBtn.addEventListener('click', () => {
      const name = nameInput.value.trim();
      if (name) {
        window.location.href = `page2.html?name=${encodeURIComponent(name)}`;
      } else {
        nameInput.placeholder = "Please enter a name 💞";
      }
    });