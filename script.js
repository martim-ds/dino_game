const peely = document.getElementById("peely");
const biggie = document.getElementById("biggie");
const score = document.getElementById("score");

function jump() {
  peely.classList.add("jump-animation");
  setTimeout(() => 
    peely.classList.remove("jump-animation"), 
    500
  );
}

document.addEventListener("keypress", () => {
  if (!peely.classList.contains("jump-animation")) {
    jump();
  }
});

setInterval(() => {
  const peelyTop = parseInt(
    window.getComputedStyle(peely).getPropertyValue("top")
  );

  const biggieLeft = parseInt(
    window.getComputedStyle(biggie).getPropertyValue("left")
  );

  score.innerText++;

  if (biggieLeft < 0) {
    biggie.style.display = "none";
  } else {
    biggie.style.display = "";
  }

  if (biggieLeft < 50 && biggieLeft > 0 && peelyTop > 150) {
    alert("You got the score of: " + score.innerText + "\n\nPlay again?")
    location.reload()
  }

}, 50);