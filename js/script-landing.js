let words = document.querySelectorAll(".slide-title");
let titleLanding = document.querySelectorAll(".original-words");
let titleLandingChanged = document.querySelectorAll(".change-words");
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
}, 2000);
