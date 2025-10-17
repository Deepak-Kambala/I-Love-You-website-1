// 💖 --- Random Romantic Paragraphs ---
    const loveLines = [
      "Tum ho meri har khushi ki wajah... Forever & Always ❤️",
      "Tum meri duniya ho, jisme har subah tumse shuru hoti hai 🌅",
      "Tera naam hi meri muskurahat ka sabab hai 😊",
      "Chaand bhi sharma jaye, jab tum muskurati ho 🌙",
      "Tum meri dil ki dhadkan ho, aur meri rooh ka sukoon 💓",
      "Tere bina zindagi adhoori lagti hai 💔",
      "Tere sath har lamha ek khubsurat kahani ban jaata hai ✨",
      "Tum meri coffee ho — strong, sweet, aur addictive ☕❤️",
      "Har dua mein sirf tumhara naam aata hai 🙏💘",
      "Mujhe tumse milkar yakeen hua, pyaar asal mein hota hai 💞"
    ];

    const loveText = document.getElementById("love-text");
    loveText.textContent = loveLines[Math.floor(Math.random() * loveLines.length)];

    // 💕 --- Heart Animation ---
    function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 2 + Math.random() * 3 + "s";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }

    // ✨ --- Sparkle Animation ---
    function createSparkle() {
      const sparkle = document.createElement("div");
      sparkle.classList.add("sparkle");
      sparkle.style.top = Math.random() * 100 + "vh";
      sparkle.style.left = Math.random() * 100 + "vw";
      sparkle.style.animationDuration = 2 + Math.random() * 3 + "s";
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 4000);
    }

    setInterval(createHeart, 300);
    setInterval(createSparkle, 200);

    // 💗 --- Mouse Heart Trail ---
    const hearts = [];
    const trailLength = 50;
    let heartIndex = 0;

    for (let i = 0; i < trailLength; i++) {
      const h = document.createElement('div');
      h.classList.add('cursor-heart');
      document.body.appendChild(h);
      hearts.push(h);
    }

    document.addEventListener('mousemove', (e) => {
      const heart = hearts[heartIndex];
      heartIndex = (heartIndex + 1) % trailLength;
      heart.style.left = `${e.clientX - 6}px`;
      heart.style.top = `${e.clientY - 6}px`;
      heart.style.animation = 'none';
      void heart.offsetWidth;
      heart.style.animation = 'growAndFade 0.7s ease-out forwards';
    });

    // 💌 --- Access name from URL ---
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    const text = document.getElementById("txt");

    if (name) {
      text.textContent = `${name} ❤️`;

      // Update nav links to pass the name parameter
      document.querySelectorAll('.nav-btn').forEach(btn => {
        if (!btn.href.includes('index.htm')) {
          const url = new URL(btn.href);
          url.searchParams.set('name', name);
          btn.href = url.toString();
        }
      });
    }

    // 🎵 --- Music Toggle ---
    const music = document.getElementById("background-music");
const musicToggle = document.getElementById("music-toggle");
const iconMuted = document.getElementById("icon-muted");
const iconPlaying = document.getElementById("icon-playing");

// Set initial state to playing
let isPlaying = true;
iconMuted.style.display = "none";
iconPlaying.style.display = "inline";

musicToggle.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    iconMuted.style.display = "inline";
    iconPlaying.style.display = "none";
  } else {
    music.play().catch(e => console.error("Autoplay was prevented:", e));
    iconMuted.style.display = "none";
    iconPlaying.style.display = "inline";
  }
  isPlaying = !isPlaying;
});

    const themes = ["light", "dark", "romantic", "purple"];
  let currentThemeIndex = 0;

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.classList.add(`${savedTheme}-theme`);
    currentThemeIndex = themes.indexOf(savedTheme);
  } else {
    document.body.classList.add("light-theme");
  }

  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      document.body.classList.remove(`${themes[currentThemeIndex]}-theme`);
      currentThemeIndex = (currentThemeIndex + 1) % themes.length;
      const newTheme = themes[currentThemeIndex];
      document.body.classList.add(`${newTheme}-theme`);
      localStorage.setItem("theme", newTheme);
    });
  }