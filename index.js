let btnDarkMode = document.getElementById("btnDarkmode");
let btnSun = document.getElementById("sunIcon");
let btnMoon = document.getElementById("moonIcon");
let body = document.getElementById("body");
let nav = document.getElementById("nav");
let navItem = document.getElementsByClassName("nav__item");

function switchDarkMode(){
  btnSun.classList.toggle('active')
  btnMoon.classList.toggle('noactive')
  body.classList.toggle('dark-mode')
}

function openHeader(){
  navItem.classList.toggle('active')
}
