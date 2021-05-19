// Header

let words = document.querySelectorAll(".slide-title");
let titleLanding = document.querySelectorAll(".original-words");
let titleLandingChanged = document.querySelectorAll(".change-words");
let bgWord = document.querySelector(".bg-word");
let currentWord = 0;
let max = words.length;

setInterval(() => {
  words[currentWord].classList.remove("active-word");
  currentWord++;
  if (currentWord >= max) {
    currentWord = 0;
  }
  words[currentWord].classList.add("active-word");
  if (words[2].classList.contains("active-word")) {
    titleLanding.forEach(function (item) {
      item.classList.add("hidden-word");
    });
    titleLandingChanged.forEach(function (item) {
      item.classList.add("show-word");
    });
  } else {
    titleLanding.forEach(function (item) {
      item.classList.remove("hidden-word");
    });
    titleLandingChanged.forEach(function (item) {
      item.classList.remove("show-word");
    });
  }
  if (words[0].classList.contains("active-word")) {
    bgWord.classList.add("expand-bg");
  } else {
    bgWord.classList.remove("expand-bg");
  }

  if (words[1].classList.contains("active-word")) {
    bgWord.classList.add("expand-bg-word2");
  } else {
    bgWord.classList.remove("expand-bg-word2");
  }
}, 2000);

// Stages & Purchase

const stages = document.querySelectorAll(".stage");
const price = document.querySelector(".purchase-right");
const toTop = window.innerHeight * 0.9;
const toTopPrice = window.innerHeight * 0.7;

function showItensLanding() {
  stages.forEach(function (item) {
    const viewTop = item.getBoundingClientRect().top - toTop;
    if (viewTop < 0) {
      item.classList.add("active-stage");
    }
    const viewTopPrice = price.getBoundingClientRect().top - toTopPrice;
    if (viewTopPrice < 0) {
      price.classList.add("active-price");
    }
  });
}

window.addEventListener("scroll", showItensLanding);

// Call To Action

const btnCta = document.querySelector(".call-to-action");
const purchase = document.querySelector("#purchase");

function showPurchase(event) {
  event.preventDefault();
  purchase.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

btnCta.addEventListener("click", showPurchase);
