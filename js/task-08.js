const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerFormSubmit);

function handlerFormSubmit(event) {
  event.preventDefault();

  const formElement = event.currentTarget.elements;

  if (formElement.email.value === "" || formElement.password.value === "") {
    alert("всі поля повинні бути заповнені");
  } else {
    const mail = formElement.email.value;
    const password = formElement.password.value;

    const formData = {
      mail,
      password,
    };
    console.log(formData);

    event.target.reset();
  }
}


