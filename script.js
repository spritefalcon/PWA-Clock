const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const timezone = document.getElementById('timezone');
const ampm = document.getElementById('ampm');
const greeting = document.getElementById('greeting');

function setTime() {
    const now = new Date();
    const formatTime = (time) => (time < 10) ? `0${time}` : time;

    hours.textContent = formatTime(now.getHours() % 12);
    minutes.textContent = formatTime(now.getMinutes());
    seconds.textContent = formatTime(now.getSeconds());
    ampm.textContent = now.getHours() >= 12 ? 'PM' : 'AM';
    timezone.textContent = now.toLocaleDateString(undefined, {day: '2-digit', timeZoneName: 'long'}).substring(4);

    if (hours >= 1 && hours < 12) {
        greetingText = 'Good morning. ';
      } else if (hours >= 12 && hours < 17) {
        greetingText = 'Good afternoon. ';
      } else {
        greetingText = 'Good evening. ';
      }
    
    greeting.textContent = greetingText;
}

setTime();
setInterval(setTime, 1000);
