// import { randoTarget } from "./index";

export function chuckIt(destination) {
  //set speed of envelope
  const speed = 5;
  //just for a histroy of clicked locations.
  // might be useful?
  let clickList = [];

  // the selected cubbie. Will need to be an array
  // "click" will add to the list and a succesful
  //arrival will delete it from the array.
  let cubbiePick = [""];
  //throw from start to end
  const start = [400, 100];
  ///find targetX and targetY for coordinates
  let targetX =
    document.getElementById(destination).getBoundingClientRect(0).top +
    document.getElementById(destination).getBoundingClientRect(0).height / 2;
  let targetY =
    document.getElementById(destination).getBoundingClientRect(0).left +
    document.getElementById(destination).getBoundingClientRect(0).width / 2;

  console.log(targetX + " by " + targetY);
  // let destination;
  console.log(destination);

  //CREATE new envelope div
  let env = document.createElement("div");
  document.body.appendChild(env);

  //add stylesheet
  env.classList.add("envelope");
  //might change this so coded it in
  env.style.top = targetX + "px";
  env.style.left = targetY + "px";
  if (env.style.top < targetX) {
    Left();
  }

  //take current x & Y and translate to new coordinates
  ////move envelope
  function Left() {
    env.style.left += speed;
  }
}
