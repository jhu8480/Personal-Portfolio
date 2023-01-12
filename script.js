
const gradutionDay = new Date('2023-04-03').getTime();


setInterval(countDifference, 1000);


function countDifference() {
  const now = new Date().getTime();
  const miliseconds = gradutionDay - now;
  
  const days = Math.floor(miliseconds/1000/3600/24);
  const hours = Math.floor(miliseconds/1000/60/60) % 24;
  const minutes = Math.floor(miliseconds/1000/60) % 60;
  const seconds = Math.floor(miliseconds/1000) % 60;
  
  const daysDiv = document.getElementById('days');
  daysDiv.innerHTML = days + ' day(s)';
  const hoursDiv = document.getElementById('hours');
  hoursDiv.innerHTML = hours + ' hour(s)';
  const minutesDiv = document.getElementById('minutes');
  minutesDiv.innerHTML = minutes + ' minute(s)';
  const secondsDiv = document.getElementById('seconds');
  if (seconds < 10) {
    secondsDiv.innerHTML = '0' + seconds + ' second(s)';
  } else {
    secondsDiv.innerHTML = seconds + ' second(s)';
  }
  
}

