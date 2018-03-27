'use strict'

var navScreen=document.querySelector('.nav');
var menuButton= document.querySelector('.nav-trigger');
var closeButton= document.querySelector('.nav-close');

function displayMenu() {
navScreen.style.left="0";
menuButton.style.display="none";
closeButton.style.position= "fixed";
closeButton.style.display= "block";
}

menuButton.addEventListener('click', displayMenu);

function closeMenu() {
  navScreen.style.left="-1500px";
  menuButton.style.display="block";
  closeButton.style.display= "none";


}

closeButton.addEventListener('click', closeMenu);
