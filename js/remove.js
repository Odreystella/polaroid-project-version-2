
const removeButton1 = document.querySelector('.delete-button1');

const $polaroid1 = document.querySelector('.polaroid1');

const $pols = document.querySelector('.polaroids');

// X 버튼 클릭 시 데이터 삭제 
const $polaroidForm1 = document.querySelector('.polaroid-form1')

const $logOut = document.querySelector('.logout');

removeButton1.onclick = () => {
  console.log('remove');
  localStorage.removeItem('recentImage1');
  $polaroid1.classList.toggle('active');
  localStorage.removeItem(DATE);
  localStorage.removeItem(LOCATION);
  localStorage.removeItem(COMMENT);
  $imageViewer1.innerHTML = `<img class="image-view image-view1" src="#" alt="image1">`; 
  $polaroidForm1.innerHTML = `
            <form class="date-form">
              <span class="date-text">date</span>
              <input type="text" class="polaroid-form-date" placeholder="Enter Date">
            </form>
            <form class="location-form">
              <sapn class="location-text form-location">location</sapn>
              <input type="text" class="polaroid-form-location" placeholder="Enter Location">
            </form>
            <form class="comment-form">
              <span class="comment-text">comment</span>
              <input type="text" class="polaroid-form-comment" placeholder="Enter Comment">
            </form>`;
};

$logOut.onclick = () => {
  localStorage.removeItem(USERNAME);
  $greetingForm.textConet = '';
  location.reload();
};
