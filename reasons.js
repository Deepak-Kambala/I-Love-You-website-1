 // Get name parameter from URL
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");

    // Update back button to include name
    const backButton = document.querySelector('.back-button');
    if (name) {
      backButton.href = `page2.htm?name=${encodeURIComponent(name)}`;
    }

    // Create floating hearts
    function createFloatingHeart() {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.textContent = ['💕', '💖', '💗', '💓', '💝', '❤️'][Math.floor(Math.random() * 6)];
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animationDuration = (8 + Math.random() * 4) + 's';
      heart.style.animationDelay = Math.random() * 5 + 's';
      document.getElementById('floatingHearts').appendChild(heart);

      setTimeout(() => heart.remove(), 15000);
    }

    // Generate hearts
    for (let i = 0; i < 15; i++) {
      createFloatingHeart();
    }

    setInterval(createFloatingHeart, 2000);