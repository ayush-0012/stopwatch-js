let seconds = 0;
let minutes = 0;
let hours = 0;


let secondsCounter = document.querySelector('.seconds-counter');
let minutesCounter = document.querySelector('.minutes-counter');
let hoursCounter = document.querySelector('.hours-counter');


  let displayTimer;
  
let startElement = document.querySelector('.start-timer');

startElement.addEventListener('click', () => {

//starts the timer after clicking on start
  if(startElement.innerHTML === 'START'){
    startElement.innerHTML = 'STOP';
    displayTimer = setInterval(() => {
      seconds += 1;
      secondsCounter.innerHTML = `${seconds.toString().padStart(2, '0')}`;
  
      if(seconds === 60){
        secondsCounter.innerHTML = `00`;
        seconds = 0;
        minutes += 1;
        minutesCounter.innerHTML = `${minutes.toString().padStart(2, '0')} :`;
      } 
  
      if(minutes === 60){
        minutesCounter.innerHTML = `00`;
        minutes = 0;
        hours += 1;
        hoursCounter.innerHTML = `${minutes.toString().padStart(2, '0')} :`;
      }
    }, 1000);
  }

//pauses the timer after clicking on stop
  else if(startElement.innerHTML === 'STOP'){
    startElement.innerHTML = 'START';
    clearInterval(displayTimer)
  }
  

})


let resetElement = document.querySelector('.reset-timer');
resetElement.addEventListener('click' , () => {

  startElement.innerHTML = 'START';

  seconds = 0;
  minutes = 0;
  hours = 0;


  secondsCounter.innerHTML = `${seconds.toString().padStart(2, '0')}`;
  minutesCounter.innerHTML = `${minutes.toString().padStart(2, '0')} :`;
  hoursCounter.innerHTML = `${hours.toString().padStart(2, '0')} :`;

  clearInterval(displayTimer);
})


