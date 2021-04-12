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

// 2번 사진 밑에 있는 텍스트 (Date, Location, Comment)
const DATE2 = "date2"
const LOCATION2 = "location2";
const COMMENT2 = "comment2";

const $dateForm2 = document.querySelector('.date-form2');
const $dateinput2 = document.querySelector('.polaroid-form-date2');
const $dateText2 = document.querySelector('.date-text2')
const $inputComment2 = document.querySelector('.polaroid-form-comment2');


const DateInput2 = () => {
  localStorage.setItem(DATE2, $dateinput2.value);
};

const DateText2 = () => {
  if (localStorage.getItem(DATE2) === null) {
    $dateText2.innerText = "date";
  } else {
    $dateText2.innerText = localStorage.getItem(DATE2);
    $dateinput2.style.display = "none";
  }
};
const DateInit2 = () => {
  DateText2();
  $dateForm2.addEventListener("submit", DateInput2);
};

DateInit2();

const $locationInput2 = document.querySelector('.polaroid-form-location2');
const $locationText2 = document.querySelector('.location-text2');
const $locationForm2 = document.querySelector('.location-form2');

const LocationInput2 = () => {
  localStorage.setItem(LOCATION2, $locationInput2.value);
}
const LocationText2 = () => {
  if (localStorage.getItem(LOCATION2) === null) {
    $locationText2.innerText = "location";
  } else {
    $locationText2.innerText = localStorage.getItem(LOCATION2);
    $locationInput2.style.display = "none";
  }
};
const LocationInit2 = () => {
  LocationText2();
  $locationForm2.addEventListener("submit", LocationInput2);
};

LocationInit2();


const $commentInput2 = document.querySelector('.polaroid-form-comment2');
const $commentText2 = document.querySelector('.comment-text2');
const $commentForm2 = document.querySelector('.comment-form2');

const CommentInput2 = () => {
  localStorage.setItem(COMMENT2, $commentInput2.value);
};
const CommentText2 = () => {
  if (localStorage.getItem(COMMENT2) === null) {
    $commentText2.innerText = "comment"
  } else {
    $commentText2.innerText = localStorage.getItem(COMMENT2);
    $commentInput2.style.display = "none";
  }
};

const CommentInit2 = () => {
  CommentText2();
  $commentForm2.addEventListener("submit", CommentInput2);
};

CommentInit2();

//  3번째 사진 밑에 있는 텍스트 (Date, Location, Comment)
const DATE3 = "date3"
const LOCATION3 = "location3";
const COMMENT3 = "comment3";

const $dateForm3 = document.querySelector('.date-form3');
const $dateinput3 = document.querySelector('.polaroid-form-date3');
const $dateText3 = document.querySelector('.date-text3')
const $inputComment3 = document.querySelector('.polaroid-form-comment3');


const DateInput3 = () => {
  localStorage.setItem(DATE3, $dateinput3.value);
};

const DateText3 = () => {
  if (localStorage.getItem(DATE3) === null) {
    $dateText3.innerText = "date";
  } else {
    $dateText3.innerText = localStorage.getItem(DATE3);
    $dateinput3.style.display = "none";
  }
};
const DateInit3 = () => {
  DateText3();
  $dateForm3.addEventListener("submit", DateInput3);
};

DateInit3();

const $locationInput3 = document.querySelector('.polaroid-form-location3');
const $locationText3 = document.querySelector('.location-text3');
const $locationForm3 = document.querySelector('.location-form3');

const LocationInput3 = () => {
  localStorage.setItem(LOCATION3, $locationInput3.value);
}
const LocationText3 = () => {
  if (localStorage.getItem(LOCATION3) === null) {
    $locationText3.innerText = "location";
  } else {
    $locationText3.innerText = localStorage.getItem(LOCATION3);
    $locationInput3.style.display = "none";
  }
};
const LocationInit3 = () => {
  LocationText3();
  $locationForm3.addEventListener("submit", LocationInput3);
};

LocationInit3();

const $commentInput3 = document.querySelector('.polaroid-form-comment3');
const $commentText3 = document.querySelector('.comment-text3');
const $commentForm3 = document.querySelector('.comment-form3');

const CommentInput3 = () => {
  localStorage.setItem(COMMENT3, $commentInput3.value);
};
const CommentText3 = () => {
  if (localStorage.getItem(COMMENT3) === null) {
    $commentText3.innerText = "comment"
  } else {
    $commentText3.innerText = localStorage.getItem(COMMENT3);
    $commentInput3.style.display = "none";
  }
};
const CommentInit3 = () => {
  CommentText3();
  $commentForm3.addEventListener("submit", CommentInput3);
};

CommentInit3();

// 4번째 사진 밑에 있는 텍스트 (Date, Location, Comment)
const DATE4 = "date4"
const LOCATION4 = "location4";
const COMMENT4 = "comment4";

const $dateForm4 = document.querySelector('.date-form4');
const $dateinput4 = document.querySelector('.polaroid-form-date4');
const $dateText4 = document.querySelector('.date-text4')
const $inputComment4 = document.querySelector('.polaroid-form-comment4');


const DateInput4 = () => {
  localStorage.setItem(DATE4, $dateinput4.value);
};

const DateText4 = () => {
  if (localStorage.getItem(DATE4) === null) {
    $dateText4.innerText = "date";
  } else {
    $dateText4.innerText = localStorage.getItem(DATE4);
    $dateinput4.style.display = "none";
  }
};
const DateInit4 = () => {
  DateText4();
  $dateForm4.addEventListener("submit", DateInput4);
};

DateInit4();

const $locationInput4 = document.querySelector('.polaroid-form-location4');
const $locationText4 = document.querySelector('.location-text4');
const $locationForm4 = document.querySelector('.location-form4');

const LocationInput4 = () => {
  localStorage.setItem(LOCATION4, $locationInput4.value);
}
const LocationText4 = () => {
  if (localStorage.getItem(LOCATION4) === null) {
    $locationText4.innerText = "location";
  } else {
    $locationText4.innerText = localStorage.getItem(LOCATION4);
    $locationInput4.style.display = "none";
  }
};
const LocationInit4 = () => {
  LocationText4();
  $locationForm4.addEventListener("submit", LocationInput4);
};

LocationInit4();

const $commentInput4 = document.querySelector('.polaroid-form-comment4');
const $commentText4 = document.querySelector('.comment-text4');
const $commentForm4 = document.querySelector('.comment-form4');

const CommentInput4 = () => {
  localStorage.setItem(COMMENT4, $commentInput4.value);
};
const CommentText4 = () => {
  if (localStorage.getItem(COMMENT4) === null) {
    $commentText4.innerText = "comment"
  } else {
    $commentText4.innerText = localStorage.getItem(COMMENT4);
    $commentInput4.style.display = "none";
  }
};
const CommentInit4 = () => {
  CommentText4();
  $commentForm4.addEventListener("submit", CommentInput4);
};

CommentInit4();

//  5번 사진 밑에 있는 텍스트 (Date, Location, Comment)
const DATE5 = "date5"
const LOCATION5 = "location5";
const COMMENT5 = "comment5";

const $dateForm5 = document.querySelector('.date-form5');
const $dateinput5 = document.querySelector('.polaroid-form-date5');
const $dateText5 = document.querySelector('.date-text5')
const $inputComment5 = document.querySelector('.polaroid-form-comment5');


const DateInput5 = () => {
  localStorage.setItem(DATE5, $dateinput5.value);
};

const DateText5 = () => {
  if (localStorage.getItem(DATE5) === null) {
    $dateText5.innerText = "date";
  } else {
    $dateText5.innerText = localStorage.getItem(DATE5);
    $dateinput5.style.display = "none";
  }
};
const DateInit5 = () => {
  DateText5();
  $dateForm5.addEventListener("submit", DateInput5);
};

DateInit5();

const $locationInput5 = document.querySelector('.polaroid-form-location5');
const $locationText5 = document.querySelector('.location-text5');
const $locationForm5 = document.querySelector('.location-form5');

const LocationInput5 = () => {
  localStorage.setItem(LOCATION5, $locationInput5.value);
}
const LocationText5 = () => {
  if (localStorage.getItem(LOCATION5) === null) {
    $locationText5.innerText = "location";
  } else {
    $locationText5.innerText = localStorage.getItem(LOCATION5);
    $locationInput5.style.display = "none";
  }
};
const LocationInit5 = () => {
  LocationText5();
  $locationForm5.addEventListener("submit", LocationInput5);
};

LocationInit5();

const $commentInput5 = document.querySelector('.polaroid-form-comment5');
const $commentText5 = document.querySelector('.comment-text5');
const $commentForm5 = document.querySelector('.comment-form5');

const CommentInput5 = () => {
  localStorage.setItem(COMMENT5, $commentInput5.value);
};
const CommentText5 = () => {
  if (localStorage.getItem(COMMENT5) === null) {
    $commentText5.innerText = "comment"
  } else {
    $commentText5.innerText = localStorage.getItem(COMMENT5);
    $commentInput5.style.display = "none";
  }
};
const CommentInit5 = () => {
  CommentText5();
  $commentForm5.addEventListener("submit", CommentInput5);
};

CommentInit5();

//  6번 사진 밑에 있는 텍스트 (Date, Location, Comment)
const DATE6 = "date6"
const LOCATION6 = "location6";
const COMMENT6 = "comment6";

const $dateForm6 = document.querySelector('.date-form6');
const $dateinput6 = document.querySelector('.polaroid-form-date6');
const $dateText6 = document.querySelector('.date-text6')
const $inputComment6 = document.querySelector('.polaroid-form-comment6');


const DateInput6 = () => {
  localStorage.setItem(DATE6, $dateinput6.value);
};

const DateText6 = () => {
  if (localStorage.getItem(DATE6) === null) {
    $dateText6.innerText = "date";
  } else {
    $dateText6.innerText = localStorage.getItem(DATE6);
    $dateinput6.style.display = "none";
  }
};
const DateInit6 = () => {
  DateText6();
  $dateForm6.addEventListener("submit", DateInput6);
};

DateInit6();

const $locationInput6 = document.querySelector('.polaroid-form-location6');
const $locationText6 = document.querySelector('.location-text6');
const $locationForm6 = document.querySelector('.location-form6');

const LocationInput6 = () => {
  localStorage.setItem(LOCATION6, $locationInput6.value);
}
const LocationText6 = () => {
  if (localStorage.getItem(LOCATION6) === null) {
    $locationText6.innerText = "location";
  } else {
    $locationText6.innerText = localStorage.getItem(LOCATION6);
    $locationInput6.style.display = "none";
  }
};
const LocationInit6 = () => {
  LocationText6();
  $locationForm6.addEventListener("submit", LocationInput6);
};

LocationInit6();

const $commentInput6 = document.querySelector('.polaroid-form-comment6');
const $commentText6 = document.querySelector('.comment-text6');
const $commentForm6 = document.querySelector('.comment-form6');

const CommentInput6 = () => {
  localStorage.setItem(COMMENT6, $commentInput6.value);
};
const CommentText6 = () => {
  if (localStorage.getItem(COMMENT6) === null) {
    $commentText6.innerText = "comment"
  } else {
    $commentText6.innerText = localStorage.getItem(COMMENT6);
    $commentInput6.style.display = "none";
  }
};
const CommentInit6 = () => {
  CommentText6();
  $commentForm6.addEventListener("submit", CommentInput6);
};

CommentInit6();