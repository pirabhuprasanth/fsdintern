let slider = document.querySelector('.slider');
let interval = 3000; // Adjust the interval as needed (in milliseconds)
let currentPosition = 0;

function nextSlide() {
    currentPosition += 100;
    if (currentPosition > (slider.children.length - 1) * 100) {
        currentPosition = 0;
    }
    slider.style.transform = `translateX(-${currentPosition}%)`;
}

setInterval(nextSlide, interval);
