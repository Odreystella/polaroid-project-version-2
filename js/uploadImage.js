const $imageInput1 = document.querySelector('.image-input1');

const $imageView1 = document.querySelector('.image-view1'); 

const $imageViewer1 = document.querySelector('.image1');


/* localStorage에서 이미지 경로 읽어와서 보여주는 함수 */
/* localStorage에서 recentImage의 value값을 가져와 이미지 경로를 다시 지정해줌 */
// const localStorageImage = () => {
//   const recentImageDataUrl = localStorage.getItem('recentImage'); // key가 recentImage인 value값을 읽어옴
//   if (recentImageDataUrl) $imageView.setAttribute('src', recentImageDataUrl)
// };

// const viewImage = () => {  
//   const reader = new FileReader(); // 비동기적으로 유저 컴퓨터에 저장된 파일을 읽어옴
//   reader.onload = () => localStorage.setItem('recentImage', reader.result); // recentImage value에 reader가 읽어온 result를 지정함. localStorage에 이미지 저장하는 함수 
//   reader.readAsDataURL('$imageInput1'.files[0]); // readAsDataURL가 file에서 이미지를 읽어온 후 image-view에서 보여줌
// };

/* 이벤트 핸들러 부분*/

$imageInput1.onchange = () => {
  console.log('image uploaded');
  const reader = new FileReader(); // 비동기적으로 유저 컴퓨터에 저장된 파일을 읽어옴
  
  reader.onload = () => {
    localStorage.setItem('recentImage1', reader.result); // recentImage value에 reader가 읽어온 result를 지정함. localStorage에 이미지 저장하는 함수 
    const recentImageDataUrl = localStorage.getItem('recentImage1'); // key가 recentImage인 value값을 읽어옴
    $imageViewer1.innerHTML = `<img class="image-view image-view1" src="${recentImageDataUrl}" alt="image1">`; 
  };
  
  reader.readAsDataURL($imageInput1.files[0]); // readAsDataURL가 file에서 이미지를 읽어온 후 image-view에서 보여줌
  $imageInput1.style.display = 'none';
};

//document.addEventListener('DOMContentLoaded', localStorageImage);
