let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  //resets everytime it is clicked
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;

  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now())/1000);
    // Check if we should stop it
    if(secondsLeft <= 0) {
      clearInterval(countdown);
      return;
    }
    // Display
    displayTimeLeft(secondsLeft);
  }, 1000);
}

//Displays the time left
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.textContent = display;
}

//Displays at the exact time it ends
function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();

  endTime.textContent =  `Be back at ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

//Starts the timer
function startTimer() {
  console.log(this);
  console.log(this.dataset);
  console.log(this.dataset.time);
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

//Adds the startTimer function to each button
buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
})