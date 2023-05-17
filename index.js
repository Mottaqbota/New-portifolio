let nav = document.getElementById("nav");
let navItem = document.querySelectorAll(".nav__item");

function switchDarkMode(){
  let btnSun = document.getElementById("sunIcon");
  let btnMoon = document.getElementById("moonIcon");
  btnSun.classList.toggle('active')
  btnMoon.classList.toggle('noactive')
  body.classList.toggle('dark-mode')
}

function openMenuHeader(){
  navItem.classList.toggle('active');
}
