const questions = document.querySelectorAll('[data-faq="questions"] li');
const answers = document.querySelectorAll('[data-faq="answers"]');
const line = document.querySelectorAll('[data-faq="line"]');
const icon = document.querySelectorAll(".icon");

const audio = new Audio("../img/beep.mp3");
audio.volume = 0.05;

questions[0].addEventListener("click", showAnswer);
questions[1].addEventListener("click", showAnswerTwo);
questions[2].addEventListener("click", showAnswerThree);
questions[3].addEventListener("click", showAnswerFour);

function showAnswer() {
  audio.pause();
  audio.currentTime = 0;
  audio.play();
  answers.forEach(function (item) {
    item.classList.remove("active");
  });
  line.forEach(function (item) {
    item.classList.remove("active");
  });
  answers[0].classList.add("active");
  line[0].classList.add("active");
  icon.forEach(function (item) {
    item.classList.remove("question-active");
  });
  icon[0].classList.add("question-active");
}

function showAnswerTwo() {
  audio.pause();
  audio.currentTime = 0;
  audio.play();
  answers.forEach(function (item) {
    item.classList.remove("active");
  });
  line.forEach(function (item) {
    item.classList.remove("active");
  });
  answers[1].classList.add("active");
  line.forEach(function (item) {
    console.log(item);
  });
  line[1].classList.add("active");
  icon.forEach(function (item) {
    item.classList.remove("question-active");
  });
  icon[1].classList.add("question-active");
}

function showAnswerThree() {
  audio.pause();
  audio.currentTime = 0;
  audio.play();
  answers.forEach(function (item) {
    item.classList.remove("active");
  });
  line.forEach(function (item) {
    item.classList.remove("active");
  });
  answers[2].classList.add("active");
  line.forEach(function (item) {
    console.log(item);
  });
  line[2].classList.add("active");
  icon.forEach(function (item) {
    item.classList.remove("question-active");
  });
  icon[2].classList.add("question-active");
}

function showAnswerFour() {
  audio.pause();
  audio.currentTime = 0;
  audio.play();
  answers.forEach(function (item) {
    item.classList.remove("active");
  });
  line.forEach(function (item) {
    item.classList.remove("active");
  });
  answers[3].classList.add("active");
  line.forEach(function (item) {
    console.log(item);
  });
  line[3].classList.add("active");
  icon.forEach(function (item) {
    item.classList.remove("question-active");
  });
  icon[3].classList.add("question-active");
}

// Mobile

const answersMobile = document.querySelectorAll(".answers-mobile");
const arrows = document.querySelectorAll(".arrow-mobile");

questions[0].addEventListener("click", showAnswerMobileOne);
function showAnswerMobileOne() {
  answersMobile[0].classList.toggle("active-mobile");
  arrows[0].textContent = "▲";
  if (answersMobile[0].classList.contains("active-mobile")) {
    arrows[0].textContent = "▼";
  }
}

questions[1].addEventListener("click", showAnswerMobileTwo);
function showAnswerMobileTwo() {
  answersMobile[1].classList.toggle("active-mobile");
  arrows[1].textContent = "▲";
  if (answersMobile[1].classList.contains("active-mobile")) {
    arrows[1].textContent = "▼";
  }
}

questions[2].addEventListener("click", showAnswerMobileThree);
function showAnswerMobileThree() {
  answersMobile[2].classList.toggle("active-mobile");
  arrows[2].textContent = "▲";
  if (answersMobile[2].classList.contains("active-mobile")) {
    arrows[2].textContent = "▼";
  }
}

questions[3].addEventListener("click", showAnswerMobileFour);
function showAnswerMobileFour() {
  answersMobile[3].classList.toggle("active-mobile");
  arrows[3].textContent = "▲";
  if (answersMobile[3].classList.contains("active-mobile")) {
    arrows[3].textContent = "▼";
  }
}
