"use script";

let nav = document.getElementById("nav");
let icon = document.getElementById("icon");
let up = document.getElementById("up");
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);
let slider = document.getElementById("slider");
let pictures= document.getElementById("pictures");
let gallery = document.getElementById("gallery");
let slid = 1;
let video=document.getElementById("video");
let preloader=document.getElementById("preloader");

//window.onscroll = function () {
// if (window.pageYOffset >= window.innerHeight) {
//  nav.style.position = "fixed";
//  icon.style.display="block";
//
// } else {
//  nav.style.position = "absolute";
// }
//};

setTimeout(function(){
  preloader.style.display="none";
}, 2000);

setTimeout(function(){
  video.play();
}, 2500);



window.onscroll = function () {
    if (window.pageYOffset < 162) {
        nav.style.marginTop = -window.pageYOffset + 'px';
    };
    
    if (window.pageYOffset >= 380) {
        up.style.opacity = "1";

    } else {
        up.style.opacity = "0";
    }
};




function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
};

up.addEventListener("click", function () {
    let timer = setInterval(function () {
        window.scrollBy(0, -20);
        if (window.pageYOffset == 0) {
            clearInterval(timer)
        }
    }, 5);});

slider.addEventListener("click", function () {
    if (slid==1){
        pictures.style.display="block"; 
        slider.innerHTML="Выключить слайдер";
        gallery.style.display="none";
        slid=2;
    } else {
        pictures.style.display="none"; 
        slider.innerHTML="Включить слайдер";
        gallery.style.display="flex";
        slid=1;
    }
});


