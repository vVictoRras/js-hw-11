const colors = ["red", "green", "violet", "gray", "blue", "yellow"];

let refStart = document.querySelector('[data-action="start"]');
//console.log(refStart);
let refStop = document.querySelector('[data-action="stop"]');
let intervalId;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function start() {
  intervalId = setInterval(() => {
    refStart.setAttribute("disabled", true);
    document.body.style.background = colors[randomIntegerFromInterval(0, 5)];
    console.log(colors[randomIntegerFromInterval(0, 5)]);
  }, 1000);
}

function stop() {
  refStart.removeAttribute("disabled");
  document.body.style.background = "white";
  clearInterval(intervalId);
}

refStart.addEventListener("click", start);
refStop.addEventListener("click", stop); 


