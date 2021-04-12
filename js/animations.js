const $heartBtn = document.querySelector('.heart');
const $heartImage = document.querySelector('.heart-img');

/* heart animation */
$heartBtn.onclick = e => {
  console.log(e.target);
  // $heartImage.setAttribute('src', '/images/heartOn.png' )
  $heartImage.classList.toggle('active');
  $heartImage.classList.contains('active') ? $heartImage.setAttribute('src', '/images/heartOn.png') : $heartImage.setAttribute('src', '/images/heartOff.png');    
};

