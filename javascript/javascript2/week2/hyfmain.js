const products = getAvailableProducts();


const ul = document.getElementById("ul");
function renderProducts(products) {
    for (let i = 0; i < products.length; i++) {
        let productItem = document.createElement('li');
        let title = document.createElement('h3');
        title.style.listStyle = "none";
        let price = document.createElement('p');
        let rating = document.createElement('p');
        productItem.appendChild(title);
        productItem.appendChild(price);
        productItem.appendChild(rating);

        title.innerHTML = `${products[i].name}`;
        price.innerHTML = `Price: ${products[i].price}`;
        rating.innerHTML = `Rating: ${products[i].rating}`;
        ul.appendChild(productItem);
    }
}

//Filter products 
function filterProducts(products, filterObject) {
    const name = filterObject.name;
    const maxPrice = filterObject.maxPrice;
    const minRating = filterObject.minRating;
    return products.filter((product) => product.name === name &&
        product.price < maxPrice &&
        product.rating > minRating)
}
const filterObject = {
    name: "Car",
    maxPrice: 7000,
    minRating: 3,

}

let filterObjectProduct = filterProducts(products, filterObject);
//console.log(filterProducts(products, filterObjectProduct))
//console.log(products);

// Searching for products

const searchInput = document.getElementById("search-bar");
const items = document.querySelectorAll('li');

searchInput.addEventListener('keyup', function () {
    const term = searchInput.value.toLowerCase();
    const filiteredArrayName = products.filter((product) => product.name.toLowerCase().includes(term));
    ul.innerHTML = "";
    renderProducts(filiteredArrayName);

})

// Filter products based on max price

const maxPrice = document.getElementById("max-price");
maxPrice.addEventListener('keyup', function () {
    const maxPriceValue = maxPrice.value;
    const filiteredArrayPrice = products.filter((product) => product.price <= maxPriceValue);
    const term = searchInput.value.toLowerCase();
    const filiteredArrayName = products.filter((product) => product.name.toLowerCase().includes(term));
    ul.innerHTML = "";
    if (term === "") {
        renderProducts(filiteredArrayPrice);
    }
    else {
        let namePrice = filiteredArrayName.filter((product) => product.price <= maxPriceValue);
        renderProducts(namePrice)
    }
})

// Create some extra feature Filter products based on Items, max price and min rating 
const minRating = document.getElementById("min-rating");
minRating.addEventListener('keyup', function () {
    const minRatingValue = minRating.value;
    const filiteredArrayRating = products.filter((product) => product.rating >= minRatingValue);
    const maxPriceValue = maxPrice.value;
    const filiteredArrayPrice = products.filter((product) => product.price <= maxPriceValue);
    const term = searchInput.value.toLowerCase();
    const filiteredArrayName = products.filter((product) => product.name.toLowerCase().includes(term));
    const namePrice = filiteredArrayName.filter((product) => product.price <= maxPriceValue);
    const priceRating = filiteredArrayPrice.filter((product) => product.rating >= minRatingValue);
    const nameRating = filiteredArrayName.filter(product => product.rating >= minRatingValue)
    const namePriceRating = namePrice.filter(product => product.rating >= minRatingValue)
    ul.innerHTML = "";
    if (term === "" && maxPriceValue === "") {
        renderProducts(filiteredArrayRating)
    }
    else if (term === "" && maxPriceValue !== "") {
        renderProducts(priceRating);
    }
    //renderProducts(filiteredArrayRating);
    else if (term !== "" && maxPriceValue === "") {
        renderProducts(nameRating)
    }
    else {
        renderProducts(namePriceRating);
    }

})

renderProducts(products);
