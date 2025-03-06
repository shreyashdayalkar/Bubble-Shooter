const bubble_container = document.querySelector(".bubble-container");
const timer = document.querySelector("#timer");
const target = document.querySelector("#aim");
const score = document.querySelector("#finalScore");

let bubbleCount = 100;

// console.log(bubble_container);
// console.log(timer);
// console.log(target);
// console.log(score);
function createBubble() {
  bubble_container.innerHTML = ""; // Clear old bubbles
  for (let i = 1; i < bubbleCount; i++) {
    const bubbles = document.createElement("div");
    bubbles.textContent = Math.floor(Math.random() * 10);
    bubbles.classList.add("bubble");
    bubble_container.appendChild(bubbles);
  }
}
createBubble();

function generateTarget() {
  const targetValue = Math.floor(Math.random() * 10);
  target.textContent = targetValue;
}
generateTarget();

let leftTime = 10;
let originalTime = leftTime;
function startTimer() {
  timer.textContent = leftTime;
  let TimeInterval = setInterval(() => {
    if (leftTime === 1) {
      clearInterval(TimeInterval);
      bubble_container.innerHTML = `<div class="append_container">
            <div class="game_over">Game Over..!!</div>
            <div class="game_score">Score: ${scoreValue}</div>
            <button class="rst_btn" onclick="resetGame()">Restart Game</button>
        </div>`;
    }
    leftTime--;
    timer.textContent = leftTime; /*This is for assigning timer on the display*/
  }, 1000); //1s = 1000ms
}
// startGame()   -> Dont call startTimer() function here instead call it in a startGame
// because it causes the decrement of 2

function resetGame() {
  leftTime = originalTime; //this is must step it makes the timer start from +ve integers instead of -ve
  timer.textContent = originalTime;
  score.textContent = 0;
  scoreValue=0;
  startGame(); //idhar starGame() call krnee avashyakk ahee nhitrr game restart honar nhi
}

function startGame() {
  createBubble();
  startTimer();
  generateTarget();
}
startGame();

//  Create a separate numeric variable to track the score (e.g., let scoreValue = 0;).
// score is a DOM element reference (not a number).You cannot perform arithmetic operations on a DOM object.
let scoreValue=0; 

//Event Delegation
bubble_container.addEventListener("click", (event) => {
  if (event.target.classList.contains("bubble")) {
    if (event.target.textContent === target.textContent) {
      scoreValue += 10;
      createBubble();  // Refresh bubbles on correct click
      generateTarget();
    }
    else{
        scoreValue -= 5;
    }
    score.textContent=scoreValue;
  }
});