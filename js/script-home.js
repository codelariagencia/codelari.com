// FAQ

const questions = document.querySelectorAll('[data-faq="questions"] li');
const answers = document.querySelectorAll('[data-faq="answers"]');
const line = document.querySelectorAll('[data-faq="line"]');
const icon = document.querySelectorAll(".icon");
const answersMobile = document.querySelectorAll(".answers-mobile");
const arrows = document.querySelectorAll(".arrow-mobile");

const audio = new Audio("../img/beep.mp3");
audio.volume = 0.05;

questions.forEach(function (question, questionId) {
  question.addEventListener("click", showAnswer);
  function showAnswer() {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    answers.forEach(function (answer) {
      answer.classList.remove("active");
    });
    line.forEach(function (questionLine) {
      questionLine.classList.remove("active");
    });
    answers[questionId].classList.add("active");
    line[questionId].classList.add("active");
    icon.forEach(function (questionIcon) {
      questionIcon.classList.remove("question-active");
    });
    icon[questionId].classList.add("question-active");
  }
  question.addEventListener("click", showAnswerMobile);
  function showAnswerMobile() {
    answersMobile[questionId].classList.toggle("active-mobile");
    arrows[questionId].textContent = "▼";
    if (answersMobile[questionId].classList.contains("active-mobile")) {
      arrows[questionId].textContent = "▲";
    }
  }
});

// Data

const dataInfos = document.querySelectorAll(".data-right p");
const toTop = window.innerHeight * 0.9;
const numbers = document.querySelectorAll("[data-numbers]");

function animaNumber(numberId, incrementValue, dataInfo) {
  if (!dataInfo.classList.contains("animated-number")) {
    const total = +numbers[numberId].textContent;
    const increment = Math.floor(total / incrementValue);
    let start = 0;
    const timer = setInterval(() => {
      start = start + increment;
      numbers[numberId].textContent = start;
      if (start > total) {
        numbers[numberId].textContent = total;
        clearInterval(timer);
      }
    }, 1);
  }
}

function animaScroll(infoId) {
  window.addEventListener("scroll", function jamaica() {
    const viewTop = dataInfos[infoId].getBoundingClientRect().top - toTop;
    if (viewTop < 0) {
      dataInfos[infoId].classList.add("active-scroll");
      window.removeEventListener("scroll", jamaica);
      if (dataInfos[1].classList.contains("active-scroll")) {
        animaNumber(0, 100, dataInfos[1]);
        dataInfos[1].classList.add("animated-number");
      }
      if (dataInfos[2].classList.contains("active-scroll")) {
        const ids = [1, 2];
        ids.forEach(function (id) {
          animaNumber(id, 100, dataInfos[2]);
        });
        dataInfos[2].classList.add("animated-number");
      }
      if (dataInfos[3].classList.contains("active-scroll")) {
        animaNumber(3, 20, dataInfos[3]);
        animaNumber(4, 100, dataInfos[3]);
        dataInfos[3].classList.add("animated-number");
      }
      if (dataInfos[4].classList.contains("active-scroll")) {
        animaNumber(5, 100, dataInfos[4]);
        dataInfos[4].classList.add("animated-number");
      }
    }
  });
}

const dataId = [0, 1, 2, 3, 4];
dataId.forEach(function (id) {
  animaScroll(id);
});

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

// Contact

const contact = document.querySelector(".contact");
const toTopContact = window.innerHeight * 0.6;
const animateLion = document.querySelectorAll("[data-lion]");

function animaScrollLion() {
  const viewTop = contact.getBoundingClientRect().top - toTopContact;
  if (viewTop < 0) {
    animateLion.forEach(function (item) {
      item.classList.add("animate-lion");
    });
  }
}

window.addEventListener("scroll", animaScrollLion);
