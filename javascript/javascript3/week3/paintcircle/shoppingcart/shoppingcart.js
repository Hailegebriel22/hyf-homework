//Getting into promises

class respiratory {
    constructor(username1, username2, username3) {
        this.username1 = username1;
        this.username2 = username2;
        this.username3 = username3;

        const promise1 = fetch(`https://api.github.com/search/repositories?q=user:${this.username1}`)
        const promise2 = fetch(`https://api.github.com/search/repositories?q=user:${this.username2}`)
        const promise3 = fetch(`https://api.github.com/search/repositories?q=user:${this.username3}`)
        const allPromises = [promise1, promise2, promise3]
        Promise.all([promise1, promise2, promise3])
            .then(response => Promise.all([response[0].json(), response[1].json(), response[2].json()]))
            .then(dat => dat.forEach(data => {

                //const x =data.forEach(dat=>dat.full_name);
                // const y =data.items[0].url;
                //const z=data.items[0].owner.login;
                const ul = document.createElement('ul');
                document.body.appendChild(ul)
                const h5 = document.createElement('h5');

                const li1 = document.createElement('li');//
                h5.innerHTML = `fullname of the repo - ${data.items[0].full_name}`;

                li1.innerHTML = `url of the repo - ${data.items[0].url}`;

                const li2 = document.createElement('li');
                li2.innerHTML = `owner of the repo - ${data.items[0].owner.login}`;


                ul.append(h5, li1, li2)
            })

            )

    }
}


const use = new respiratory("Hailegebriel22", "Hanouj", "patel-prakashkumar")






// Shopping cart using Classes

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    //provided currency return the correct price 
    convertToCurrency(currency) {
        const currencyValue = fetch(`https://v6.exchangerate-api.com/v6/ce21fbeaedb5d8ad0bf28163/latest/DKK`)
            .then(data => data.json());
        if (currency === "USD") {

            currencyValue.then(datar => console.log(this.price * datar.conversion_rates.USD))
        }
        else if (currency === "EUR") {
            currencyValue.then(datar => console.log(this.price * datar.conversion_rates.EUR))
        }
        else if (currency === "GBP") {
            currencyValue.then(datar => console.log(this.price * datar.conversion_rates.GBP))
        }

    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        return this.products.push(product);
    }

    removeProduct(product) {
        return this.products.filter(item => item !== product);
    }

    searchProduct(productName) {
        const filteredProducts = this.products.filter(product =>
            product.name.toLowerCase() === productName.toLowerCase())
        return filteredProducts;
    }

    getTotal() {
        const eachPrice = [];
        this.products.forEach(product => eachPrice.push(product.price));
        return eachPrice.reduce((x, y) => x + y)
    }

    renderProducts() {
        const h1 = document.createElement('h1');
        document.body.appendChild(h1)
        h1.innerHTML = `Products price list`


        this.products.forEach(product => {
            const ul = document.createElement('ul');
            document.body.appendChild(ul)

            const h5 = document.createElement('h5');
            ul.appendChild(h5)

            const li = document.createElement('li');

            h5.innerHTML = `product - ${product.name}`

            li.innerHTML = `price - ${product.price} kr`
            //li.style.listStyle = "none"

            return ul.appendChild(li)

        });

    }

    getUser(user) {
        const dataPromise = fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
            .then(response => response.json())
            .then(data => data)
        return dataPromise;

    }
}

const shoppingCart = new ShoppingCart();
console.log(shoppingCart)
const flatscreen = new Product("flat-screen", 5000);
const appleMacBook = new Product("Apple MacBook", 7000);
const iphone13 = new Product("iPhone 13", 6000);
const airPods = new Product("Apple airpods", 1200);



shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(appleMacBook);
shoppingCart.addProduct(iphone13);
shoppingCart.addProduct(airPods);


console.log(shoppingCart.searchProduct("iPhone 13"))

console.log(shoppingCart.getTotal())
console.log(shoppingCart.getUser('Antonette'))

shoppingCart.renderProducts()
const plant = new Product("plant", 50);
console.log(plant.convertToCurrency("GBP"))
