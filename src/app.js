/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cont = document.querySelector(".cont");
const card = document.createElement("div");
const btn = document.createElement("button");
btn.textContent = "new card";
card.classList.add("card");
cont.append(card);
cont.append(btn);

const nums = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
const suites = ["clubs", "spades", "diamonds", "hearts"];

function randNum() {
  let randNums = Math.floor(Math.random() * nums.length);
  return nums[randNums];
}
function randSuite() {
  let randSuite = Math.floor(Math.random() * suites.length);
  return suites[randSuite];
}
function cardGenerate() {
  card.classList.remove(randSuite());
  card.classList.add(randSuite());
  card.innerHTML = randNum();
  console.log(card);
}
btn.addEventListener("click", cardGenerate);
window.onload = function() {
  cardGenerate();
};
