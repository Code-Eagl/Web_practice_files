const hourEl = document.getElementsByid("hour");
const minutesEl = document.getElementsByid("minutes");
const secondsEl = document.getElementsByid("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  setTimeout(() => {
    updateClock;
  }, 1000);
}

console.log(updateClock());
