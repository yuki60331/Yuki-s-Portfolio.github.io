// -----------------------------------------------------------
// 輪波圖
var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {

        760: {
            slidesPerView: 1.5,
        },

        1000: {
            slidesPerView: 2,
        },

        1200: {
            slidesPerView: 2.5,
        }
    },
});

// -----------------------------------------------------------
// 輪波圖
var swiper = new Swiper('.swiper2', {
    slidesPerView: 1,
    spaceBetween: 15,
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {

        760: {
            slidesPerView: 2,
        },

        1000: {
            slidesPerView: 3,
        },

        1200: {
            slidesPerView: 4.2,
        }
    },
});
// -----------------------------------------------------------
// 簡報圖

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    slidesPerView: 1,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});


// -----------------------------------------------------------
// 簡報圖2

var swiper = new Swiper(".mySwiper3", {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper4", {
    spaceBetween: 10,
    slidesPerView: 1,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});


// -----------------------------------------------------------
// 簡報圖3

var swiper = new Swiper(".mySwiper5", {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper6", {
    spaceBetween: 10,
    slidesPerView: 1,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

// -----------------------------------------------------------
// 簡報圖4

var swiper = new Swiper(".mySwiper7", {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper8", {
    spaceBetween: 10,
    slidesPerView: 1,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

// -----------------------------------------------------------
// 簡報圖5

var swiper = new Swiper(".mySwiper9", {
    spaceBetween: 10,
    slidesPerView: 10,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper10", {
    spaceBetween: 10,
    slidesPerView: 1,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});


// -----------------------------------------------------------------------------------
// BACK TO TOP
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}