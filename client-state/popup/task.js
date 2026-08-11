const modal = document.getElementById("subscribe-modal");
const close = modal.querySelector(".modal__close");

if (!document.cookie.includes("modalClosed=true")) {
  modal.classList.add("modal_active");
}

close.addEventListener("click", () => {
  modal.classList.remove("modal_active");
  document.cookie = "modalClosed=true; max-age=31536000; path=/";
});
