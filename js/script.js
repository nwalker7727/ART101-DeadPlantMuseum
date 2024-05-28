let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
        console.log(index);
    });
}

function nextSlide() {
    if (slideIndex < slides.length+2) {
        slideIndex+=2;
        showSlide(slideIndex);
    }
    else if(slideIndex >= slides.length+2) {
        slideIndex = 0;
        showSlide(slideIndex);
    }
}

function prevSlide() {
    if (slideIndex > 0) {
        slideIndex-=2;
        showSlide(slideIndex);
    }
    else if(slideIndex <=0) {
        slideIndex = slides.length+2;
        showSlide(slideIndex);
    }
}



// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.style.transform = `translateX(${100 * (i - index)}%)`;
//         console.log(index);
//     });
// }

// function nextSlide() {
//     if (slideIndex < slides.length+2) {
//         slideIndex+=2;
//         showSlide(slideIndex);
//     }
//     else if(slideIndex >= slides.length+2) {
//         slideIndex = 0;
//         showSlide(slideIndex);
//     }
// }

// function prevSlide() {
//     if (slideIndex > 0) {
//         slideIndex-=2;
//         showSlide(slideIndex);
//     }
//     else if(slideIndex <=0) {
//         slideIndex = slides.length+2;
//         showSlide(slideIndex);
//     }
// }

// let currentSlide = 0;

// function showSlide(index) {
//     const slides = document.querySelectorAll('.slide');
//     if (index >= slides.length) {
//         currentSlide = 0;
//     } else if (index < 0) {
//         currentSlide = slides.length - 1;
//     } else {
//         currentSlide = index;
//     }

//     slides.forEach((slide, i) => {
//         slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
//     });
// }

// function nextSlide() {
//     showSlide(currentSlide + 1);
// }

// function prevSlide() {
//     showSlide(currentSlide - 1);
// }

// document.addEventListener('DOMContentLoaded', () => {
//     showSlide(currentSlide);
// });

