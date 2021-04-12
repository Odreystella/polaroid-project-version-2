const $heart1 = document.querySelector('.heart1');


$heart1.onclick = () => {
  console.log('sucess');
  $heart1.classList.toggle('active');
  $heart1.classList.contains('active') ? $heart1.setAttribute('src', '/images/heartOn.png') : $heart1.setAttribute('src', '/images/heartOff.png');    
};

