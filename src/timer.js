import { gameOverMan } from "./index.js";
import { chuckIt } from "./throwMail.js";

export function roundTimer() {
  ///how many seconds the round is
  let roundTimer = 60;
  //how many ms the timer updates
  //this number should be able to be updated and
  //the click should still update every second.
  let TimerIncrement = 50;
  //how much it updates the trackTimer by
  const TimerDifference = 1000 / TimerIncrement;
  ///actual timer
  let Timer = setInterval(displayTimer, TimerIncrement);
  //assigning the text to timerDiv
  let timerDiv = document.getElementById("timer");
  timerDiv.innerHTML = roundTimer;

  let trackTimer = 0;
  // let TimerSet = setInterval(displayTimer, 1000);
  function displayTimer() {
    //update independent timer with increment to stay in sync
    trackTimer += TimerIncrement;
    // console.log(trackTimer);
    // if (trackTimer % 1000 === 0) {
    if (trackTimer === 1000) {
      console.log("BOOM");
      trackTimer = 0;

      if (roundTimer <= 5) {
        lastSeconds();
      }
      timerDiv.innerHTML = roundTimer;
      roundTimer -= 1;

      if (roundTimer < 0) {
        clearInterval(Timer);
        console.log("Game Over Man!");

        gameOverMan();
      }
    }
  }
  function lastSeconds() {
    timerDiv.classList.replace("timerBox", "redTimer");
    // replace not working for some reason
    //className is returning as ""
    // timerDiv.style.color = "rgb(206, 23, 23)";
    // timerDiv.style.backgroundColor = "rgb(90, 58, 58)";
    // console.log(timerDiv.className);
  }
}
