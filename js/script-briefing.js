const form = document.querySelector(".briefing-form-js");
const submitBriefingButton = document.querySelector(".submit-briefing-js");

const fields = [...form.querySelectorAll("label")];

const sendForm = async () => {
  let formData = new FormData();

  const name = form.querySelector(`[name=name]`).value;
  const body = getBody();

  formData.append("name", name);
  formData.append("body", body);

  const response = await fetch("briefing.php", {
    method: "POST",
    body: formData,
    mode: "no-cors",
  });

  const result = await response.json();
  if (result.isSuccess) {
    alert("Enviado com sucesso");
  }
};

const getBody = () => {
  let body = ``;

  fields.forEach((field) => {
    const labelName = field.getAttribute("for");
    title = field.innerText;
    text = form.querySelector(`[name=${labelName}]`).value;
    body += `<h1>${title}</h1>${text}<br/><br/>`;
  });

  return body;
};

submitBriefingButton.addEventListener("click", (e) => {
  e.preventDefault();
  sendForm();
});
