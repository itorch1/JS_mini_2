const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

const leftSlide = document.querySelector('#left-slide');
const rightSlide = document.querySelector('#right-slide');

const slidesLength = rightSlide.querySelectorAll('div').length;

upBtn.addEventListener('click', () => scroll(false) );
downBtn.addEventListener('click', () => scroll(true) );

let index = 0;

function scroll(oppositeDirection) {
    if (oppositeDirection)
        index--;
    else
        index++;
    if (index < 0)
        index = slidesLength - 1;
    if (index > slidesLength - 1)
        index = 0;


    console.log(`calc(100vh * ${index})`);
    leftSlide.style.top = `calc(-100vh * ${index})`;
    rightSlide.style.top = `calc(-100vh * ${3 - index})`;
}