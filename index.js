const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');

let timerId = null;

const colorSwitcher = function () {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, 5)]}`
  }, 1000);
  startButton.setAttribute('disabled', true);
  // startButton.removeEventListener('click', colorSwitcher);
}

startButton.addEventListener('click', colorSwitcher);

stopButton.addEventListener('click', () => {
  clearTimeout(timerId);
  startButton.removeAttribute('disabled');
  // startButton.addEventListener('click', colorSwitcher);
  });