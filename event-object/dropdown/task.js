const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const button = dropdown.querySelector(".dropdown__value");
  const list = dropdown.querySelector(".dropdown__list");
  button.addEventListener("click", () => {
    list.classList.toggle("dropdown__list_active");
  });
  const items = dropdown.querySelectorAll(".dropdown__item");
  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const link = item.querySelector('.dropdown__link');
      const linkText = link.textContent;
      button.textContent = linkText;
      list.classList.remove("dropdown__list_active");
    });
  });
});
