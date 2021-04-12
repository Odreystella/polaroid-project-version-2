const $heart1 = document.querySelector('.heart1');
const $heart2 = document.querySelector('.heart2');
const $heart3 = document.querySelector('.heart3');
const $heart4 = document.querySelector('.heart4');
const $heart5 = document.querySelector('.heart5');
const $heart6 = document.querySelector('.heart6');

$heart1.onclick = () => {
  console.log('sucess');
  $heart1.classList.toggle('active');
  $heart1.classList.contains('active') ? $heart1.setAttribute('src', '/images/heartOn.png') : $heart1.setAttribute('src', '/images/heartOff.png');    
};

$heart2.onclick = () => {
  console.log('sucess');
  $heart2.classList.toggle('active');
  $heart2.classList.contains('active') ? $heart2.setAttribute('src', '/images/heartOn.png') : $heart2.setAttribute('src', '/images/heartOff.png');    
};

$heart3.onclick = () => {
  console.log('sucess');
  $heart3.classList.toggle('active');
  $heart3.classList.contains('active') ? $heart3.setAttribute('src', '/images/heartOn.png') : $heart3.setAttribute('src', '/images/heartOff.png');    
};

$heart4.onclick = () => {
  console.log('sucess');
  $heart4.classList.toggle('active');
  $heart4.classList.contains('active') ? $heart4.setAttribute('src', '/images/heartOn.png') : $heart4.setAttribute('src', '/images/heartOff.png');    
};

$heart5.onclick = () => {
  console.log('sucess');
  $heart5.classList.toggle('active');
  $heart5.classList.contains('active') ? $heart5.setAttribute('src', '/images/heartOn.png') : $heart5.setAttribute('src', '/images/heartOff.png');    
};

$heart6.onclick = () => {
  console.log('sucess');
  $heart6.classList.toggle('active');
  $heart6.classList.contains('active') ? $heart6.setAttribute('src', '/images/heartOn.png') : $heart6.setAttribute('src', '/images/heartOff.png');    
};