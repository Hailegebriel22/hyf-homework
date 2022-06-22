const products = getAvailableProducts();



function renderProducts(products) {
    for (let i = 0; i < products.length; i++) {
        let title = document.createElement('h3');
        let price = document.createElement('li');
        let rating = document.createElement('li');
        ul.appendChild(title);
        ul.appendChild(price);
        ul.appendChild(rating);

        title.innerHTML = `${products[i].name}`;
        price.innerHTML = `Price: ${products[i].price}`;
        rating.innerHTML = `Rating: ${products[i].rating}`;
    }
}

renderProducts(products);