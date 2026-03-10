const peely   = document.getElementById("peely");
const biggie  = document.getElementById("biggie");
const score   = document.getElementById("score");
const bg      = document.getElementById("bg");
const startBtn = document.getElementById("start-btn");

// Spiel ist am Anfang gestoppt
let gameRunning  = false;
let gameInterval = null;

function jump() {
  peely.classList.add("jump-animation");
  setTimeout(() =>
    peely.classList.remove("jump-animation"),
    600
  );
}

// Funktion startGame startet das Spiel
function startGame() {
  console.log("Start Button wurde geklickt!");

  // Button verstecken
  startBtn.style.display = "none";

  // Biggie und Hintergrund starten
  biggie.style.animationPlayState = "running";
  bg.style.animationPlayState = "running";

  // Spiel läuft jetzt
  gameRunning = true;

  // Game Loop starten
  gameInterval = setInterval(() => {
    const peelyTop = parseInt(
      window.getComputedStyle(peely).getPropertyValue("top")
    );

    const biggieLeft = parseInt(
      window.getComputedStyle(biggie).getPropertyValue("left")
    );

    // Score hochzählen
    score.innerText++;

    if (biggieLeft < 0) {
      biggie.style.display = "none";
    } else {
      biggie.style.display = "";
    }

    if (biggieLeft < 50 && biggieLeft > 0 && peelyTop > 150) {
      // Kollision: alles stoppen, Animation abspielen
      gameRunning = false;
      clearInterval(gameInterval);
      biggie.style.animationPlayState = "paused";
      bg.style.animationPlayState = "paused";
      peely.classList.add("collision-animation");
      setTimeout(() => {
        alert("You got the score of: " + score.innerText + "\n\nPlay again?");
        location.reload();
      }, 500);
    }

  }, 50);
}

// Click Event Handler für den Start Button
startBtn.addEventListener("click", () => {
  startGame();
});

document.addEventListener("keypress", () => {
  if (gameRunning) {
    if (!peely.classList.contains("jump-animation")) {
      jump();
    }
  }
});