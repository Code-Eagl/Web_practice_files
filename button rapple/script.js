const btnEl = document.querySelector(".btn");
btnEl.addEventListener("mouseover", (event) => {
  const x = event.pagex - btnEl.offsetleft;
  const y = event.pagex - btnEl.offsetTop;
  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});
