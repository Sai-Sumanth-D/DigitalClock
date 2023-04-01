const hourEle = document.getElementById("hour");
const minEle = document.getElementById("minutes");
const secEle = document.getElementById("seconds");

const ampmEle = document.getElementById("ampm");

const updateClock = () => {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  //  this says that if h<10 write 0+h value, otherwise just write h;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEle.innerText = h;
  minEle.innerText = m;
  secEle.innerText = s;

  ampmEle, (innerText = ampm);

  //  calls the function after the time in millisecs which is our second parameter
  setTimeout(() => {
    updateClock();
  }, 1000);
};
updateClock();
