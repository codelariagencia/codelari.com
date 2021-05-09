// FAQ

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
  line[3].classList.add("active");
  icon.forEach(function (item) {
    item.classList.remove("question-active");
  });
  icon[3].classList.add("question-active");
}

// FAQ Mobile

const answersMobile = document.querySelectorAll(".answers-mobile");
const arrows = document.querySelectorAll(".arrow-mobile");

questions[0].addEventListener("click", showAnswerMobileOne);
function showAnswerMobileOne() {
  answersMobile[0].classList.toggle("active-mobile");
  arrows[0].textContent = "▼";
  if (answersMobile[0].classList.contains("active-mobile")) {
    arrows[0].textContent = "▲";
  }
}

questions[1].addEventListener("click", showAnswerMobileTwo);
function showAnswerMobileTwo() {
  answersMobile[1].classList.toggle("active-mobile");
  arrows[1].textContent = "▼";
  if (answersMobile[1].classList.contains("active-mobile")) {
    arrows[1].textContent = "▲";
  }
}

questions[2].addEventListener("click", showAnswerMobileThree);
function showAnswerMobileThree() {
  answersMobile[2].classList.toggle("active-mobile");
  arrows[2].textContent = "▼";
  if (answersMobile[2].classList.contains("active-mobile")) {
    arrows[2].textContent = "▲";
  }
}

questions[3].addEventListener("click", showAnswerMobileFour);
function showAnswerMobileFour() {
  answersMobile[3].classList.toggle("active-mobile");
  arrows[3].textContent = "▼";
  if (answersMobile[3].classList.contains("active-mobile")) {
    arrows[3].textContent = "▲";
  }
}

// Data

const dataInfos = document.querySelectorAll(".data-right p");
const toTop = window.innerHeight * 0.9;
const numbers = document.querySelectorAll("[data-numbers]");

function animaScroll() {
  const viewTop = dataInfos[0].getBoundingClientRect().top - toTop;
  if (viewTop < 0) {
    dataInfos[0].classList.add("active-scroll");
  }
}

window.addEventListener("scroll", animaScroll);

function animaScrollTwo() {
  const viewTop = dataInfos[1].getBoundingClientRect().top - toTop;
  if (viewTop < 0) {
    dataInfos[1].classList.add("active-scroll");
    window.removeEventListener("scroll", animaScrollTwo);
    const total = +numbers[0].textContent;
    const increment = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start = start + increment;
      numbers[0].textContent = start;
      if (start > total) {
        numbers[0].textContent = total;
        clearInterval(timer);
      }
    }, 1);
  }
}

window.addEventListener("scroll", animaScrollTwo);

function animaScrollThree() {
  const viewTop = dataInfos[2].getBoundingClientRect().top - toTop;
  if (viewTop < 0) {
    dataInfos[2].classList.add("active-scroll");
    window.removeEventListener("scroll", animaScrollThree);
    const total = +numbers[1].textContent;
    const increment = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start = start + increment;
      numbers[1].textContent = start;
      if (start > total) {
        numbers[1].textContent = total;
        clearInterval(timer);
      }
    }, 1);
  }
}

window.addEventListener("scroll", animaScrollThree);

function animaScrollFour() {
  const viewTop = dataInfos[2].getBoundingClientRect().top - toTop;
  if (viewTop < 0) {
    dataInfos[2].classList.add("active-scroll");
    window.removeEventListener("scroll", animaScrollFour);
    const total = +numbers[2].textContent;
    const increment = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start = start + increment;
      numbers[2].textContent = start;
      if (start > total) {
        numbers[2].textContent = total;
        clearInterval(timer);
      }
    }, 1);
  }
}

window.addEventListener("scroll", animaScrollFour);

function animaScrollFive() {
  const viewTop = dataInfos[3].getBoundingClientRect().top - toTop;
  if (viewTop < 0) {
    dataInfos[3].classList.add("active-scroll");
    window.removeEventListener("scroll", animaScrollFive);
    const total = +numbers[3].textContent;
    const increment = Math.floor(total / 20);
    let start = 0;
    const timer = setInterval(() => {
      start = start + increment;
      numbers[3].textContent = start;
      if (start > total) {
        numbers[3].textContent = total;
        clearInterval(timer);
      }
    }, 1);
  }
}

window.addEventListener("scroll", animaScrollFive);

function animaScrollSix() {
  const viewTop = dataInfos[3].getBoundingClientRect().top - toTop;
  if (viewTop < 0) {
    dataInfos[3].classList.add("active-scroll");
    window.removeEventListener("scroll", animaScrollSix);
    const total = +numbers[4].textContent;
    const increment = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start = start + increment;
      numbers[4].textContent = start;
      if (start > total) {
        numbers[4].textContent = total;
        clearInterval(timer);
      }
    }, 1);
  }
}

window.addEventListener("scroll", animaScrollSix);

function animaScrollSeven() {
  const viewTop = dataInfos[4].getBoundingClientRect().top - toTop;
  if (viewTop < 0) {
    dataInfos[4].classList.add("active-scroll");
    window.removeEventListener("scroll", animaScrollSeven);
    const total = +numbers[5].textContent;
    const increment = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start = start + increment;
      numbers[5].textContent = start;
      if (start > total) {
        numbers[5].textContent = total;
        clearInterval(timer);
      }
    }, 1);
  }
}

window.addEventListener("scroll", animaScrollSeven);

const img = document.querySelector(".data-left img");
const toTopImg = window.innerHeight * 0.8;

function animaScrollImg() {
  const viewTop = img.getBoundingClientRect().top - toTopImg;
  if (viewTop < 0) {
    img.classList.add("show-img");
  }
}

window.addEventListener("scroll", animaScrollImg);

// Service

const benefits = document.querySelectorAll(".plan ul li");
const tooltips = document.querySelectorAll(".tooltip");

benefits[0].addEventListener("mouseover", showTooltipOne);
function showTooltipOne() {
  tooltips[0].classList.add("active-tooltip");
}

benefits[0].addEventListener("mouseout", hiddenTooltipOne);
function hiddenTooltipOne() {
  tooltips[0].classList.remove("active-tooltip");
}

benefits[1].addEventListener("mouseover", showTooltipTwo);
function showTooltipTwo() {
  tooltips[1].classList.add("active-tooltip");
}

benefits[1].addEventListener("mouseout", hiddenTooltipTwo);
function hiddenTooltipTwo() {
  tooltips[1].classList.remove("active-tooltip");
}

benefits[2].addEventListener("mouseover", showTooltipThree);
function showTooltipThree() {
  tooltips[2].classList.add("active-tooltip");
}

benefits[2].addEventListener("mouseout", hiddenTooltipThree);
function hiddenTooltipThree() {
  tooltips[2].classList.remove("active-tooltip");
}

benefits[3].addEventListener("mouseover", showTooltipFour);
function showTooltipFour() {
  tooltips[3].classList.add("active-tooltip");
}

benefits[3].addEventListener("mouseout", hiddenTooltipFour);
function hiddenTooltipFour() {
  tooltips[3].classList.remove("active-tooltip");
}

benefits[4].addEventListener("mouseover", showTooltipFive);
function showTooltipFive() {
  tooltips[4].classList.add("active-tooltip");
}

benefits[4].addEventListener("mouseout", hiddenTooltipFive);
function hiddenTooltipFive() {
  tooltips[4].classList.remove("active-tooltip");
}

benefits[5].addEventListener("mouseover", showTooltipSix);
function showTooltipSix() {
  tooltips[5].classList.add("active-tooltip");
}

benefits[5].addEventListener("mouseout", hiddenTooltipSix);
function hiddenTooltipSix() {
  tooltips[5].classList.remove("active-tooltip");
}

benefits[6].addEventListener("mouseover", showTooltipSeven);
function showTooltipSeven() {
  tooltips[6].classList.add("active-tooltip");
}

benefits[6].addEventListener("mouseout", hiddenTooltipSeven);
function hiddenTooltipSeven() {
  tooltips[6].classList.remove("active-tooltip");
}

benefits[7].addEventListener("mouseover", showTooltipEight);
function showTooltipEight() {
  tooltips[7].classList.add("active-tooltip");
}

benefits[7].addEventListener("mouseout", hiddenTooltipEight);
function hiddenTooltipEight() {
  tooltips[7].classList.remove("active-tooltip");
}
