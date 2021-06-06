const form = document.querySelector(".briefing-form-js");
const submitBriefingButton = document.querySelector(".submit-briefing-js");
const steps = document.querySelectorAll(".steps");
const instructions = document.querySelectorAll(".briefing-instructions");
const navBtn = document.querySelectorAll(".nav-btn");

const fields = [...form.querySelectorAll("label")];

var openFile = function (event) {
  var input = event.target;

  document.getElementById("preview-image").style.display = "block";

  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    var output = document.getElementById("image");
    output.src = dataURL;
  };
  reader.readAsDataURL(input.files[0]);
};

const sendForm = async () => {
  let formData = new FormData();

  const btnSubmit = document.querySelector("#enviar");
  btnSubmit.classList.add("loading", "click-on-submit");
  btnSubmit.innerText = "Enviando";
  btnSubmit.disabled = true;
  navBtn[7].disabled = true;

  const enterprise = form.querySelector(`[name=enterprise]`).value;
  const body = getBody();

  formData.append("name", enterprise);
  formData.append("body", body);

  const response = await fetch("briefing.php", {
    method: "POST",
    body: formData,
    mode: "no-cors",
  });

  if (!response.ok) {
    steps.forEach(function (step) {
      step.classList.add("feedback-briefing");
    });
    instructions.forEach(function (instruction) {
      instruction.classList.add("feedback-briefing");
    });
    const feedbackError = document.querySelector(".briefing-form #form-erro");
    feedbackError.classList.add("show-feedback");
  }

  const result = await response.json();
  if (result.isSuccess) {
    steps.forEach(function (step) {
      step.classList.add("feedback-briefing");
    });
    instructions.forEach(function (instruction) {
      instruction.classList.add("feedback-briefing");
    });
    const feedbackSucess = document.querySelector(
      ".briefing-form #form-sucesso"
    );
    feedbackSucess.classList.add("show-feedback");
  }
};

const getBody = () => {
  let body = ``;

  fields.forEach((field) => {
    const labelName = field.getAttribute("for");
    title = field.innerText;
    text = form.querySelector(`[name=${labelName}]`).value;
    if (title === "Logotipo da marca") {
      const img = document.querySelector(".image").src;
      text = `<img src="${img}"></img>`;
    }
    const forOfLabels = [
      "has-site",
      "has-categories",
      "has-familiarity",
      "has-mission",
      "has-positioning",
      "has-fonts",
      "has-function",
    ];
    forOfLabels.forEach(function (labels) {
      if (labelName === labels) {
        text = "";
        const verifyCheckbox = document.querySelectorAll(".field-checkbox");
        verifyCheckbox.forEach(function (item) {
          if (item.checked) {
            if (item.getAttribute("name") === labels) {
              text = item.nextElementSibling.innerText;
            }
          }
        });
      }
    });
    body += `<h1>${title}</h1>${text}<br/><br/>`;
  });

  return body;
};

submitBriefingButton.addEventListener("click", (e) => {
  e.preventDefault();
  sendForm();
});

// Navegation

const stepsOnBreadcrumb = document.querySelectorAll(".breadcrumb li span");

navBtn.forEach(function (btn) {
  btn.addEventListener("click", nav);
});

const nameForm = form.querySelector(`[name=name]`);
const emailForm = form.querySelector(`[name=email]`);
const enterpriseForm = form.querySelector(`[name=enterprise]`);

function nav(event) {
  const btnId = +event.target.id;
  let ctrl = btnId + 1;
  let animaStep = "nextStep 0.7s forwards";
  if (
    nameForm.checkValidity() &&
    emailForm.checkValidity() &&
    enterpriseForm.checkValidity()
  ) {
    event.preventDefault();
    window.scrollTo(0, 0);
    if (event.target.innerText === "← VOLTAR ETAPA") {
      ctrl = btnId - 1;
      animaStep = "previousStep 0.7s forwards";
    }
    steps.forEach(function (step) {
      step.style.animation = animaStep;
      activeStep(ctrl);
      deactivateStep(btnId);
    });
  }
}

const activeStep = (stepId) => {
  steps[stepId].classList.add("active-step");
  instructions[stepId].classList.add("active-instruction");
  stepsOnBreadcrumb[stepId].classList.add("active-breadcrumb");
};

const deactivateStep = (stepId) => {
  steps[stepId].classList.remove("active-step");
  instructions[stepId].classList.remove("active-instruction");
  stepsOnBreadcrumb[stepId].classList.remove("active-breadcrumb");
};

// Checkbox

const checkbox = document.querySelectorAll(".field-checkbox");
const questions = document.querySelectorAll(".handle-question");

checkbox.forEach(function (box) {
  box.addEventListener("change", showQuestion);
});

function showQuestion(event) {
  questions.forEach(function (question) {
    if (
      event.target.getAttribute("data-field") ===
      question.getAttribute("data-field")
    ) {
      if (event.target.value === "positive") {
        question.classList.add("active-question");
      } else if (event.target.value === "negative") {
        question.classList.remove("active-question");
      }
    }
  });
}

// Colors

const fieldColors = document.querySelectorAll(".field-color");
const colors = document.querySelector(".colors");

fieldColors.forEach(function (field) {
  field.addEventListener("change", returnValue);
});

function returnValue() {
  colors.value = `<p style="color: ${fieldColors[0].value}">${fieldColors[0].value}</p>
     <p style="color: ${fieldColors[1].value}">${fieldColors[1].value}</p>
     <p style="color: ${fieldColors[2].value}">${fieldColors[2].value}</p>`;
}
