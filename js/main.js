$(document).ready(function () {


    $(".lds-ellipsis").fadeOut(1000, function () {
        $('.looding').slideUp(1000)

        $("body").css("overflow", "visible")
    })
})



//Aos animation js
AOS.init();


// change bg nav bar on scroll
function changebg() {
    var navbar = document.getElementById('nav-bg');
    var scrollValue = window.scrollY;
    if (scrollValue < 10) {
        navbar.classList.remove('bg-color')
    }
    else {
        navbar.classList.add('bg-color')
    }
}

window.addEventListener('scroll', changebg)


let overlay = document.querySelector('#overlay')
let AboutBtn = document.querySelector('#AboutBtn')
let iconClose = document.querySelector('#iconClose')
let body = document.querySelector('body')

AboutBtn.addEventListener('click', function () {
    overlay.classList.replace('d-none', 'd-flex')
    $("body").css("overflow", "hidden")


})

iconClose.addEventListener('click', function () {
    overlay.classList.replace('d-flex', 'd-none')
    $("body").css("overflow", "visible")
})


// Slide Work
var swiperWork = new Swiper(".swiper-work", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});