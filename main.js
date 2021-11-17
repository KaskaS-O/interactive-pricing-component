const slider = document.getElementById('myRange');
const discount = document.querySelector('.txt--discount');
const pageviews = document.querySelector('.pricing__pageviews');
const price = document.querySelector('.pricing__price');
const switcher = document.querySelector('.slider--switch');

let screenWidth = window.innerWidth;
let priceValue = 16;

// Setting price inner txt
price.innerText = `$${priceValue.toFixed(2)}`

// Slider styling Chrome
slider.addEventListener('input', () => {
    let value = slider.value;
    slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${value}%, hsl(224, 65%, 95%) ${value}%, hsl(224, 65%, 95%) 100%)`;
});

slider.addEventListener('mousedown', () => {
    slider.classList.add('slider-drag')
});

slider.addEventListener('mouseup', () => {
    if (slider.classList.contains('slider-drag')) {
        slider.classList.remove('slider-drag')
    } else return
})

slider.addEventListener('touchstart', () => {
    slider.classList.add('slider-drag')
});

slider.addEventListener('touchend', () => {
    if (slider.classList.contains('slider-drag')) {
        slider.classList.remove('slider-drag')
    } else return
})

// Disccount inner txt
if (screenWidth >= 1200) {
    discount.innerText = '25% discount';
} 

// Slider handler
const handlePriceChange = () => {
    let value = slider.value;

    if (value < 20) {
        pageviews.innerText = '10K pageviews';
        priceValue = 8;
    } else {
        pageviews.innerText = '50K pageviews';
        priceValue = 12;

        if (value >= 40) {
            pageviews.innerText = '100K pageviews';
            priceValue = 16;

            if (value >= 60) {
                pageviews.innerText = '500K pageviews';
                priceValue = 24;

                if (value >= 80) {
                    pageviews.innerText = '1M pageviews';
                    priceValue = 36;
                }
            }
        }
    }

    if (switcher.classList.contains('active')) {
        priceValue = priceValue * 0.75;
    }

    price.innerText = `$${priceValue.toFixed(2)}`
}

const handleBillingSwitch = () => {
    switcher.classList.toggle('active');
    handlePriceChange()
}


slider.addEventListener('input', handlePriceChange);
switcher.addEventListener('click', handleBillingSwitch);
