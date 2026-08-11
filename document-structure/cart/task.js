const products = document.querySelectorAll(".product");
const cart = document.querySelector(".cart__products");

products.forEach((product) => {
  const decButton = product.querySelector(".product__quantity-control_dec");
  const incButton = product.querySelector(".product__quantity-control_inc");
  const quantityValue = product.querySelector(".product__quantity-value");


  decButton.addEventListener("click", () => {
    let quantity = Number(quantityValue.textContent);

    if (quantity > 1) {
      quantity--;
      quantityValue.textContent = quantity;
    }
  });

  incButton.addEventListener("click", () => {
    let quantity = Number(quantityValue.textContent);

    quantity++;
    quantityValue.textContent = quantity;
  });

  const addButton = product.querySelector(".product__add");
  addButton.addEventListener("click", () => {
    const id = product.dataset.id;
    const image = product.querySelector(".product__image").src;
    const quantity = Number(quantityValue.textContent);

    const existingProduct = cart.querySelector(
      `.cart__product[data-id="${id}"]`,
    );

    if (existingProduct) {
      const count = existingProduct.querySelector(".cart__product-count");

      count.textContent = Number(count.textContent) + quantity;
    } else {
      const cartProduct = document.createElement("div");
      cartProduct.className = "cart__product";
      cartProduct.dataset.id = id;

      cartProduct.innerHTML = `
                <img class="cart__product-image" src="${image}">
                <div class="cart__product-count">${quantity}</div>
            `;

      cart.appendChild(cartProduct);
    }
  });
});
