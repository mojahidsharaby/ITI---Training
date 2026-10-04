const API_URL = `https://dummyjson.com/products`;

const productsContainer = document.getElementById(`productsContainer`);
const searchInput = document.getElementById(`searchInput`);

const categoryButtons = document.querySelectorAll(".category-btn");

let products = [];

async function getProducts() {
  try {
    const response = await fetch(`${API_URL}`);

    const data = await response.json();

    products = data.products;

    console.log(products);

    displayProducts(products);
  } catch (error) {
    console.log(error);
  }
}

function displayProducts(products) {
  productsContainer.innerHTML = ``;

  products.forEach((product) => {
    const productHTML = `
            <div class="col-md-6 col-lg-4 col-xl-3">

                <div class="product-card">

                    <img
                        src="${product.thumbnail}"
                        alt="${product.title}"
                    >

                    <div class="product-info">

                        <span class="product-category">
                            ${product.category}
                        </span>

                        <h3>
                            ${product.title}
                        </h3>

                        <p>
                            ${product.description}
                        </p>

                        <div class="product-bottom">

                            <span class="product-price">
                                $${product.price}
                            </span>

                            <span class="product-rating">
                                ⭐ ${product.rating}
                            </span>

                        </div>

                    </div>

                </div>

            </div>
        `;

    productsContainer.innerHTML += productHTML;
  });
}

getProducts();

function getCategory(button) {
  return button.innerText.toLowerCase();
}

function filterProducts(category) {
  return products.filter((product) => {
    return product.category === category;
  });
}

function handleCategoryClick(button) {
  setActiveCategory(button);

  const category = getCategory(button);

  if (category === "all") {
    displayProducts(products);
  } else {
    const filteredProducts = filterProducts(category);

    displayProducts(filteredProducts);
  }
}


categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    handleCategoryClick(button);
  });
});

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  const filteredProducts = searchProducts(searchValue);

  displayProducts(filteredProducts);
});

function searchProducts(searchValue) {
  return products.filter((product) => {
    return product.title.toLowerCase().includes(searchValue);
  });
}

// color btn
function setActiveCategory(button) {
  categoryButtons.forEach((categoryButton) => {
    categoryButton.classList.remove("btn-primary");
    categoryButton.classList.add("btn-outline-primary");
  });

  button.classList.remove("btn-outline-primary");
  button.classList.add("btn-primary");
}
