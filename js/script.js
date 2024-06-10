let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideTexts = document.querySelectorAll('.slide-text');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
        console.log(index);
    });
    slideTexts.forEach(text => {
      text.classList.remove('active-text');
  });

  if (index % 2 === 0) {
      slideTexts[index / 2].classList.add('active-text');
  }
  console.log(index);
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
showSlide(slideIndex);

const URL = "https://perenual.com/api/pest-disease-list";

$("#disease").click(function(){
  console.log("Click");
  // call ajax
  $.ajax(ajaxObj);
})



function ajaxSuccess(data) {
  const dataArray = data.data;
  console.log(dataArray.length)
  const randomIndex = Math.floor(Math.random() * dataArray.length);
  console.log(randomIndex)
  const element1 = dataArray[randomIndex];
  console.log("element1:", element1);
  const question1 = element1.description[0].subtitle;
  const answer1 = element1.description[0].description;
  const question2 = element1.description[1].subtitle;
  const answer2 = element1.description[1].description;
  let imageURL = null;
  try{
    imageURL = element1.images[0].regular_url;
  }
  catch(error){
    $.ajax(ajaxObj);
  }
  $("#diseased").html("<h3>" + question1);
  if(imageURL != null){
     $("#diseased").append("<img src='" + imageURL + "' />")
  }
  $("#diseased").append("<p>" + answer1);
  $("#diseased").append("<h4>" + question2);
  $("#diseased").append("<p>" + answer2);
}


document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.carousel .slide');
  const audio = document.getElementById('carousel-audio');
  let currentIndex = 0;

  function showImage(index) {
      images.forEach((img, i) => {
          img.style.transform = `translateX(${100 * (i - index)}%)`;
      });
  }

  function startCarousel() {
      showImage(currentIndex);
      if (audio) {
          audio.play().catch(error => {
              console.log("Audio playback failed: ", error);
          });
      }
      setInterval(() => {
          currentIndex = (currentIndex + 1) % images.length;
          showImage(currentIndex);
      }, 3000); // Change image every 3 seconds
  }

  startCarousel();
});
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.carousel .slide');
  const audio = document.getElementById('carousel-audio');
  let currentIndex = 0;

  function showImage(index) {
      images.forEach((img, i) => {
          img.style.transform = `translateX(${100 * (i - index)}%)`;
      });
  }

  function startCarousel() {
      showImage(currentIndex);
      setInterval(() => {
          currentIndex = (currentIndex + 1) % images.length;
          showImage(currentIndex);
      }, 3000); // Change image every 3 seconds
  }

  document.getElementById('start-carousel-button').addEventListener('click', () => {
      if (audio) {
          audio.play().catch(error => {
              console.log("Audio playback failed: ", error);
          });
      }
      startCarousel();
  });
});
