const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondsInDegrees = ((seconds / 60) * 360) + 90;
  const minutesInDegrees = ((minutes / 60) * 360) + 90;
  const hoursInDegrees = ((hours / 24) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsInDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesInDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursInDegrees}deg)`;
}

setInterval(setDate, 1000);
