// Slider styling Chrome

const slider = document.getElementById('myRange');

slider.addEventListener('input', () => {
    let value = slider.value;
    slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${value}%, hsl(224, 65%, 95%) ${value}%, hsl(224, 65%, 95%) 100%)`
});

