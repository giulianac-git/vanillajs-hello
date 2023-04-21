/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function onload() {
  //write your code here
  let who = [
    "The aliens",
    "My brother",
    "A cheetah",
    "A zombie unicorn",
    "My dog",
    "A parrot",
    "The flamingo mafia"
  ];
  let action = [
    "ate",
    "pooped",
    "crushed",
    "broke",
    "shredded",
    "exploded",
    "stole"
  ];
  let what = [
    "my homework",
    "the keys",
    "the car",
    "my backpack",
    "my glasses",
    "my wheels",
    "my laptop"
  ];
  let when = [
    "5 mins before class",
    "as I walked through the door",
    "when I finished",
    "while I was showering",
    "while I was driving",
    "when I was heading to work",
    "when I was distracted"
  ];

  let randomWho = who[Math.round(Math.random() * (who.length - 1))];
  let randomAction = action[Math.round(Math.random() * (action.length - 1))];
  let randomWhat = what[Math.round(Math.random() * (what.length - 1))];
  let randomWhen = when[Math.round(Math.random() * (when.length - 1))];
  let excuse =
    "OMG! You will not believe me but... <br>" +
    randomWho +
    " " +
    randomAction +
    " " +
    randomWhat +
    " " +
    randomWhen +
    ".";

  console.log(excuse);

  let excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = excuse;
};

onload();
