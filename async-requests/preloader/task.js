const loader = document.getElementById("loader");
const items = document.getElementById("items");

const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses",
);

xhr.addEventListener("load", () => {
  const data = JSON.parse(xhr.responseText);

  loader.classList.remove("loader_active");

  const currencies = data.response.Valute;

  for (const code in currencies) {
    const currency = currencies[code];

    items.innerHTML += `
            <div class="item">
                <div class="item__code">${currency.CharCode}</div>
                <div class="item__value">${currency.Value}</div>
                <div class="item__currency">руб.</div>
            </div>
        `;
  }
});

xhr.send();
