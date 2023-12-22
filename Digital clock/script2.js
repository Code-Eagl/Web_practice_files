function updateTime() {
  // Get current time

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  /*Determine AM/PM
   let ampm = "AM";
   if (hours >= 12) {
     ampm = "PM";
     formattedHours = hours > 12 ? hours - 12 : hours; // Adjust for 12-hour format
   }*/

  // Format time with leading zeros
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  // Update HTML elements
  document.getElementById("hour").innerHTML = formattedHours;
  document.getElementById("minutes").innerHTML = formattedMinutes;
  document.getElementById("seconds").innerHTML = formattedSeconds;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial update
updateTime();
