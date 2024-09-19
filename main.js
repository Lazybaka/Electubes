// Script to make the navbar sticky when scrolling
window.onscroll = function() {
    var navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
};
// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelector('.carousel-images');
    const images = Array.from(carouselImages.children);
    let index = 0;

    function showNextImage() {
        index = (index + 1) % images.length;
        updateCarousel();
    }

    function showPreviousImage() {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    }

    function updateCarousel() {
        const offset = -index * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    document.querySelector('.carousel-button-next').addEventListener('click', showNextImage);
    document.querySelector('.carousel-button-prev').addEventListener('click', showPreviousImage);
});
// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelector('.carousel-images');
    const slides = Array.from(carouselImages.children);
    const totalSlides = slides.length;
    let index = 0;

    function showSlide(newIndex) {
        if (newIndex >= totalSlides) {
            index = 0;
        } else if (newIndex < 0) {
            index = totalSlides - 1;
        } else {
            index = newIndex;
        }
        const offset = -index * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        showSlide(index + 1);
    }

    function prevSlide() {
        showSlide(index - 1);
    }

    document.querySelector('.carousel-button-next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-button-prev').addEventListener('click', prevSlide);
});
