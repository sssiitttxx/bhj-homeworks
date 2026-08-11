const form = document.getElementById("tasks__form");
const input = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  const task = document.createElement("div");
  task.className = "task";

  const title = document.createElement("div");
  title.className = "task__title";
  title.textContent = text;

  const removeBtn = document.createElement("a");
  removeBtn.href = "#";
  removeBtn.className = "task__remove";
  removeBtn.innerHTML = "&times;";

  removeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    task.remove();
  });
  task.appendChild(title);
  task.appendChild(removeBtn);
  tasksList.appendChild(task);

  input.value = "";
});
