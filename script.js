// creating variables
let counter = document.getElementsByClassName("counter");

// Reference of main div
let main = document.getElementById("main");

// Reference of start button
let start = document.getElementById("start");

// Reference of stop button
let stop = document.getElementById("stop");

// Reference of reset button
let reset = document.getElementById("reset");

// Reference of timer button
let timer = document.getElementById("timer");

let timeStart = false;

// Function to Update the Timer Section
let increase = function () {
  let i = counter.length - 1;
  let count = parseInt(counter[i].innerHTML);
  let finalTime = i % 2 == 0 ? 5 : 9;
  while (count == finalTime) {
    count = 0;
    counter[i].innerHTML = count;
    i--;
    count = parseInt(counter[i].innerHTML);
    finalTime = i % 2 == 0 ? 5 : 9;
    if (i < 0) break;
  }
  if (i >= 0) {
    count++;
    counter[i].innerHTML = count;
  }
};

// Id is the instance id of setInterval()
var id;

// function to start the timer
let StartTime = function () {
  if (!timeStart) {
    id = setInterval(increase, 1000);
    timeStart = true;
  }
};

// function used to stop the timer
let stopTime = function () {
  clearInterval(id);
  timeStart = false;
};

// function used to reset the timer
let Reset = function () {
  for (let i of counter) {
    i.innerHTML = 0;
  }
};

// Click event on start button
// To start the timer of the stopwatch
start.addEventListener("click", StartTime);

// Click event on stop button
// To stop the timer of the stopwatch
stop.addEventListener("click", stopTime);

// Click event on reset button
// To reset the timer of the stopwatch
reset.addEventListener("click", Reset);
