import { roundTimer } from "./timer.js";
import { chuckIt } from "./throwMail.js";

// import "./styles.css";
// import { startScreen } from "./startScreen";

//event Listener for Rules
document.getElementById("toggleRules").addEventListener("click", function () {
  console.log("It's working!");
  document.getElementById("startLogo").disabled = true;
  document.getElementById("helpBox").classList.replace("popUpOff", "popUpOn");
});
document.getElementById("stampX").addEventListener("click", function () {
  console.log("this is working, too!");
  document.getElementById("startLogo").disabled = false;
  document.getElementById("helpBox").classList.replace("popUpOn", "popUpOff");
});
/**
 *
 * Global Variables
 */
let startCounter = 4;
// const bossBonus = 5;
// let isItOn = false;
export let gamePlay = false;
const rows = 2;
const cols = 5;
export let randoTarget = `r${Math.floor(Math.random() * rows + 1)}c${Math.floor(
  Math.random() * cols + 1
)}_light`;

// let randoClick = "";
export let score = 0;

// console.log("randoTarget = #" + randoTarget);
/**Pre Game */

/***
 * since game has to shut off/on grid of boxes
 * This will just take the new and old classNames
 * and apply them to every cubbie
 */
function classReplace(oldClass, newClass) {
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      console.log(`r${i}c${j}`);
      document
        .getElementById(`r${i}c${j}`)
        .classList.replace(oldClass, newClass);
    }
  }
}
//same function but for the lights
function lightSwitch(oldClass, newClass) {
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      console.log(`r${i}c${j}`);
      document
        .getElementById(`r${i}c${j}_light`)
        .classList.replace(oldClass, newClass);
    }
  }
}

function startScreen() {
  classReplace("jSlot", "jSlotInactive");
  console.log(document.getElementsByClassName("jSlot"));
  console.log("trust me, music is playing.");
  document.getElementById("startButton").addEventListener("click", function () {
    console.log("got it");
    document.getElementById("toggleRules").disabled = true;
    gamePlay = true;

    let countdown = setInterval(TimerGo, 1000);

    function TimerGo() {
      startCounter--;

      // document.getElementById("startButton").style.display = "none";
      document.getElementById("startScreen").innerHTML = startCounter;

      console.log(startCounter);
      if (startCounter <= 0) {
        startCounter = 0;
        document.getElementById("startScreen").style.display = "none";
        //gameStart
        TimerStop();
      }
    }

    function TimerStop() {
      clearInterval(countdown);

      gamePlay = true;
      roundTimer();
      GameOn();
    }
  });
  //onpress of start, start game, delete div

  //start countdown to gameStart
}

export function gameOverMan() {
  // gameOver = true;
  gamePlay = false;
  classReplace("jSlot", "jSlotInactive");
  lightSwitch("jLightOn", "jLight");
  document.getElementById("timer").style.color = "white";
  document.getElementById("timer").innerHTML = "STOP!";
  // document
  //   .querySelectorAll("jSlot")
  //   .classList.replace("jSlot", "jSlotInactive");
  document.getElementById("startScreen").style.display = "block";
  document.getElementById("startScreen").innerHTML = `<h2>Your score:</h2></br>
  <h3 class="score">${score}</h3>`;
  // "<h2>Your score!</h1> <p class=/'score/'>" + score + "</p>";
}

/**Game Start
 *
 *
 *
 *
 */
function GameOn() {
  if (gamePlay === true) {
    classReplace("jSlotInactive", "jSlot");
    // document.getElementById("timer").innerHTML = roundTimer /;
    //put an eventListener on all jslot classes
    document.querySelectorAll(".jSlot").forEach((cubbies) => {
      cubbies.addEventListener("click", throwJewelry);
    });
    ////////////////////////////////////////

    ///////////////////////////////////////////////
    //   THROW JEWELRY

    //events happen on every click
    function throwJewelry() {
      let randoClick = event.target.id;
      chuckIt(randoClick);
      // user hits correct cubbie
      if (randoTarget === event.target.id + "_light") {
        score += 10; //add magic number score value
        //use div naming convention to tie cubbie to light
        console.log(randoTarget + " + " + event.target.id + "_light");
        document
          .getElementById(randoTarget)
          .classList.replace("jLightOn", "jLight");
        //post score
        document.getElementById("scoreKeeper").innerHTML = `${score}`;
        //creat new target cubbie
        randoTarget = `r${Math.floor(Math.random() * rows + 1)}c${Math.floor(
          Math.random() * cols + 1
        )}_light`;
        //user hits wrong cubbie
      } else {
        // lose points
        score -= 5;
        // post to new score
        document.getElementById("scoreKeeper").innerHTML = `${score}`;
      }
      chooseTarget();
    }
    // document.getElementById("timer").classList.replace("timer", "testTimer");
    console.log(document.getElementById("timer").classList.contains("timer"));

    function chooseTarget() {
      // let spaces = rows;
      document
        .getElementById(randoTarget)
        .classList.replace("jLight", "jLightOn");
      document
        .querySelector(`#${randoTarget}`)
        .classList.replace("jSlot", "jSlotRed");
      //start a timer
    }

    chooseTarget();
    console.log(randoTarget);
  } else {
    return;
  }
}

// function gameOverMan() {
//   gameOver = true;
//   console.log("STOP! GAME OVER!");
// }
/**
 *
 * GAME ORDER
 */
startScreen();

// if (gameOver) {
//   // GameOn();
// } else {
//   // gameOverMan();
// }
