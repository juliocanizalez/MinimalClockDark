"use strict";

var deg = 6;
var hr = document.querySelector("#hr");
var mn = document.querySelector("#mn");
var sc = document.querySelector("#sc");
setInterval(function () {
  var day = new Date();
  var ss = day.getSeconds() * deg;
  var mm = day.getMinutes() * deg;
  var hh = day.getHours() * 30 + mm * 360 / (12 * 60) / 12; //Formato de 12 horas

  hr.style.transform = "rotateZ(" + hh + "deg)";
  mn.style.transform = "rotateZ(" + mm + "deg)";
  sc.style.transform = "rotateZ(" + ss + "deg)";
});