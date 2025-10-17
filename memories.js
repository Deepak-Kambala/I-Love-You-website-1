 // Get name parameter from URL
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");

    // Update back button to include name
    const backButton = document.querySelector('.back-button');
    if (name) {
      backButton.href = `page2.htm?name=${encodeURIComponent(name)}`;
    }

    // Create sparkles
    function createSparkle() {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = Math.random() * 100 + '%';
      sparkle.style.top = Math.random() * 100 + '%';
      sparkle.style.animationDelay = Math.random() * 3 + 's';
      document.getElementById('sparkles').appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 4000);
    }

    // Generate sparkles
    for (let i = 0; i < 15; i++) {
      createSparkle();
    }

    setInterval(createSparkle, 800);