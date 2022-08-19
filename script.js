let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let mins = document.querySelector(".min");
let secs = document.querySelector(".sec");
let mils = document.querySelector(".mil");
let min = 0;
let sec = 0;
let mil = 0;

let interval;

start.addEventListener("click", starter);

function starter() {
  interval = setInterval(function () {
    if (mil < 99) {
      mil += 1;
      mils.innerHTML = mil < 10 ? `0${mil}` : mil;
    } else {
      mil = 0;
      mils.innerHTML = mil < 10 ? `0${mil}` : mil;
      if (sec < 59) {
        sec += 1;
        secs.innerHTML = sec < 10 ? `0${sec} : ` : `${sec}:`;
      } else {
        sec = 0;
        min += 1;
        mins.innerHTML = min < 10 ? `0${min} : ` : `${min}:`;
      }
    }
  }, 10);
}

stop.addEventListener("click", () => {
  clearInterval(interval);
});

reset.addEventListener("click", () => {
  location.reload();
});
