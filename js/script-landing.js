// Header

let words = document.querySelectorAll(".slide-title");
let titleLanding = document.querySelectorAll(".original-words");
let titleLandingChanged = document.querySelectorAll(".change-words");
let bgWord = document.querySelector(".bg-word");
let currentWord = 0;
let max = words.length;

const form = document.querySelector(".contact-form-js");
const formButton = form.querySelector(".submit-form-js");

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

// Mask

const number = document.querySelector(".number");

number.addEventListener("keyup", formatNumber);

function formatNumber() {
  const ddd = number.value[0] + number.value[1];
  const firstPartCel =
    number.value[2] +
    number.value[3] +
    number.value[4] +
    number.value[5] +
    number.value[6];
  const secondPartCel =
    number.value[7] + number.value[8] + number.value[9] + number.value[10];
  const firstPartTel =
    number.value[2] + number.value[3] + number.value[4] + number.value[5];
  const secondPartTel =
    number.value[6] + number.value[7] + number.value[8] + number.value[9];
  if (number.value.length >= 11) {
    number.value = `${ddd} ${firstPartCel} ${secondPartCel}`;
  } else if (number.value.length >= 10) {
    number.value = `${ddd} ${firstPartTel} ${secondPartTel}`;
  }
}

const nameForm = document.querySelector(".name");

function capitalize(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}

nameForm.addEventListener("keyup", formatName);

function formatName() {
  nameForm.value = capitalize(nameForm.value);
}

// Form

const emailForm = document.querySelector(".email");
const messageForm = document.querySelector(".message");

window.SimpleForm = class {
  constructor(t) {
    (this.config = t),
      (this.form = document.querySelector(t.form)),
      this.form &&
        "function" == typeof window.fetch &&
        ((this.url = this.form.getAttribute("action")),
        (this.formButton = this.form.querySelector(t.button)),
        this.init());
  }
  displayError() {
    this.form.innerHTML = this.config.erro;
  }
  displaySuccess() {
    this.form.innerHTML = this.config.sucesso;
  }
  getFormValues() {
    const t = new FormData();
    return (
      this.form.querySelectorAll("[name]").forEach((e) => {
        const r = e.getAttribute("name");
        let n = e.value;
        if (e.classList.contains("field-text")) {
          n = e.value.replace(/\r\n|\r|\n/g, "</br>");
        }
        t.append(r, n);
      }),
      t
    );
  }
  validateForm() {
    const t = this.form.querySelectorAll("[required]");
    let e =
      !0 &&
      emailForm.checkValidity() &&
      number.checkValidity() &&
      nameForm.checkValidity() &&
      messageForm.checkValidity();
    return (
      t.forEach((t) => {
        e && (e = !!t.value);
      }),
      e
    );
  }
  onSendForm(t) {
    t.preventDefault(),
      (t.currentTarget.disabled =
        !0 &&
        emailForm.checkValidity() &&
        number.checkValidity() &&
        nameForm.checkValidity() &&
        messageForm.checkValidity()),
      t.currentTarget.classList.add("loading", "click-on-submit"),
      (t.currentTarget.innerText = "Enviando");
  }
  sendForm(t) {
    this.validateForm() &&
      (this.onSendForm(t),
      fetch(this.url, { method: "POST", body: this.getFormValues() })
        .then((t) => {
          const formInstruction = document.querySelector(".form-instruction");
          formInstruction.style.display = "none";
          if (!t.ok) throw Error(t.statusText);
          return t.text();
        })
        .then((t) => {
          this.displaySuccess();
        })
        .catch((t) => {
          this.displayError();
        }));
  }
  init() {
    (this.sendForm = this.sendForm.bind(this)),
      this.formButton.addEventListener("click", this.sendForm);
  }
};

new SimpleForm({
  form: ".formphp",
  button: "#enviar",
  erro: "<div id='form-erro'><h2>Ops, algum erro ocorreu :(</h2><p>Mas calma, você ainda pode enviar um e-mail diretamente para <a class='link' href='mailto:contato@codelari.com'><strong>contato@codelari.com</strong></a><p id='form-note'>Não se esqueça de no assunto colocar: Contato - Codelari, e além disso, também incluir no corpo do e-mail o seu nome, algum meio de contato e o que deseja.<br><br>Não perca tempo, estamos no aguardo da sua mensagem!</div>",
  sucesso:
    "<div id='form-sucesso'><h2>Agradecemos a preferência :)</h2><p>Fique tranquilo(a)! Sabemos que a ansiedade é grande, mas tentaremos responder o mais rápido possível.</p></div>",
});
