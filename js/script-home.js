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

function animaNumber(numberId, dataInfo, incrementValue = 100) {
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
  window.addEventListener("scroll", function showData() {
    const viewTop = dataInfos[infoId].getBoundingClientRect().top - toTop;
    if (viewTop < 0) {
      dataInfos[infoId].classList.add("active-scroll");
      window.removeEventListener("scroll", showData);
      if (dataInfos[1].classList.contains("active-scroll")) {
        animaNumber(0, dataInfos[1]);
        dataInfos[1].classList.add("animated-number");
      }
      if (dataInfos[2].classList.contains("active-scroll")) {
        const ids = [1, 2];
        ids.forEach(function (id) {
          animaNumber(id, dataInfos[2]);
        });
        dataInfos[2].classList.add("animated-number");
      }
      if (dataInfos[3].classList.contains("active-scroll")) {
        animaNumber(3, dataInfos[3], 20);
        animaNumber(4, dataInfos[3]);
        dataInfos[3].classList.add("animated-number");
      }
      if (dataInfos[4].classList.contains("active-scroll")) {
        animaNumber(5, dataInfos[4]);
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

const benefits = document.querySelectorAll(".test");
const tooltips = document.querySelectorAll(".tooltip");

benefits.forEach(function (benefit) {
  benefit.addEventListener("mouseover", showTooltip);
  function showTooltip(event) {
    const benefitId = event.target.id;
    tooltips[benefitId].classList.add("active-tooltip");
    benefit.addEventListener("mouseout", function () {
      tooltips[benefitId].classList.remove("active-tooltip");
    });
  }
});

// Contact

const contact = document.querySelector(".contact");
const toTopContact = window.innerHeight * 0.7;
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
