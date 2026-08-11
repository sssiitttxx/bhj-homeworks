const title = document.getElementById("poll__title");
const answers = document.getElementById("poll__answers");

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");

xhr.addEventListener("load", () => {
  const data = JSON.parse(xhr.responseText);

  title.textContent = data.data.title;

  data.data.answers.forEach((answer) => {
    const button = document.createElement("button");

    button.className = "poll__answer";
    button.textContent = answer;

    button.addEventListener("click", () => {
      alert("Спасибо, ваш голос засчитан!");
    });

    answers.appendChild(button);
  });
});

xhr.send();
