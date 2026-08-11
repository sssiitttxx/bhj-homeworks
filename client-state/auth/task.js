const signin = document.getElementById("signin");
const form = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");

const savedUserId = localStorage.getItem("user_id");

if (savedUserId) {
  userId.textContent = savedUserId;
  signin.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.open("POST", form.action);

  xhr.addEventListener("load", () => {
    const data = JSON.parse(xhr.responseText);

    if (data.success) {
      localStorage.setItem("user_id", data.user_id);

      userId.textContent = data.user_id;
      signin.classList.remove("signin_active");
      welcome.classList.add("welcome_active");
    } else {
      alert("Неверный логин/пароль");
    }
  });

  xhr.send(new FormData(form));
});
