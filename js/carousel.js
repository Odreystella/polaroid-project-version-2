const polaroids = document.querySelector('.polaroids');
const polaroid = document.querySelector('.polaroid');
const leftButton = document.querySelector('.carousel-left');
const rightButton = document.querySelector('.carousel-right');
let currentPolaroid = 0;



const movePolaroid = num => {
    polaroids.style.left = -num * 380 + 'px';
    currentPolaroid = num;
}
rightButton.onclick = () => {
    currentPolaroid < 3 ? movePolaroid(currentPolaroid + 1) : movePolaroid(0);
}

leftButton.onclick = () => {
    currentPolaroid > 0 ? movePolaroid(currentPolaroid - 1) : movePolaroid(3);
}