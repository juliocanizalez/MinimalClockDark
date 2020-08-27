const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();
  let ss = day.getSeconds() * deg;
  let mm = day.getMinutes() * deg;
  let hh = day.getHours() * 30 + (mm * 360) / (12 * 60) / 12;//Formato de 12 horas

  hr.style.transform = "rotateZ(" + hh + "deg)";
  mn.style.transform = "rotateZ(" + mm + "deg)";
  sc.style.transform = "rotateZ(" + ss + "deg)";
})
