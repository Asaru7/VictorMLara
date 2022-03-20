const menu =document.querySelector("#menu");
const navbar =document.querySelector(".navbar");

menu.onclick = () =>{
  navbar.classList.toggle("active");
}

const uiFirst =document.querySelector("#ui");
const uiSecond =document.querySelector(".ui");

uiFirst.onclick = () =>{
  uiSecond.classList.toggle("activeU")
}
const webFirst =document.querySelector("#web");
const webSecond =document.querySelector(".web");

webFirst.onclick = () =>{
  webSecond.classList.toggle("activeW")
}
const fixFirst =document.querySelector("#fix");
const fixSecond =document.querySelector(".fix");

fixFirst.onclick = () =>{
  fixSecond.classList.toggle("activeF")
}