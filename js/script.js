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
}
