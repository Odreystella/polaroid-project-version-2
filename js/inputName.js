const USERNAME = "username";

const $greetingForm = document.querySelector('.main-greeting');
const $greetingInput = document.querySelector('.input-name');
const $greetingText = document.querySelector('.main-greeting-hello');


const greetingInput = e => {
  // local storage에 유저 입력값 저장, 이름(값) 불러오기
  localStorage.setItem(USERNAME, $greetingInput.value);
  console.log(USERNAME);
  greetingText();
  greetingInput.classList.add(HIDE);
};
const greetingText = () => {
  if (localStorage.getItem(USERNAME) === null) {
    $greetingText.innerText = "Enter your name";
  } else {
    $greetingText.innerText = `Hello. ${localStorage.getItem(USERNAME)} :)`;
    $greetingInput.style.display = "none"
  }
};
const greetingInit = () => {
  greetingText();
  $greetingForm.addEventListener("submit", greetingInput);
};

greetingInit()
// document.querySelector('DOMContentLoaded', greetingInit)

//  사진 밑에 있는 텍스트 (Date, Location, Comment)
// const DATE = ["date1", "date2", "date3", "date4", "date5", "date6"];
const DATE = "date";
const LOCATION = "location";
const COMMENT = "comment";

const $dateForm = document.querySelector('.date-form');
const $dateinput = document.querySelector('.polaroid-form-date');
const $dateText = document.querySelector('.date-text')
const $inputComment = document.querySelector('.polaroid-form-comment');


// local storage에 날짜 저장, 날짜(값) 불러오기
const DateInput = () => {
  localStorage.setItem(DATE, $dateinput.value);
};

const DateText = () => {
  if (localStorage.getItem(DATE) === null) {
    $dateText.innerText = "date";
  } else {
    $dateText.innerText = localStorage.getItem(DATE);
    $dateinput.style.display = "none";
  }
};
const DateInit = () => {
  DateText();
  $dateForm.addEventListener("submit", DateInput);
};

DateInit();

// local storage에 위치 저장, 위치(값) 불러오기
const $locationInput = document.querySelector('.polaroid-form-location');
const $locationText = document.querySelector('.location-text');
const $locationForm = document.querySelector('.location-form');

const LocationInput = () => {
  localStorage.setItem(LOCATION, $locationInput.value);
}
const LocationText = () => {
  if (localStorage.getItem(LOCATION) === null) {
    $locationText.innerText = "location";
  } else {
    $locationText.innerText = localStorage.getItem(LOCATION);
    $locationInput.style.display = "none";
  }
};
const LocationInit = () => {
  LocationText();
  $locationForm.addEventListener("submit", LocationInput);
};

LocationInit();


// loack storage에 코멘트 저장, 값 불러오가
const $commentInput = document.querySelector('.polaroid-form-comment');
const $commentText = document.querySelector('.comment-text');
const $commentForm = document.querySelector('.comment-form');

const CommentInput = () => {
  localStorage.setItem(COMMENT, $commentInput.value);
};
const CommentText = () => {
  if (localStorage.getItem(COMMENT) === null) {
    $commentText.innerText = "comment"
  } else {
    $commentText.innerText = localStorage.getItem(COMMENT);
    $commentInput.style.display = "none";
  }
};

const CommentInit = () => {
  CommentText();
  $commentForm.addEventListener("submit", CommentInput);
};

CommentInit();

