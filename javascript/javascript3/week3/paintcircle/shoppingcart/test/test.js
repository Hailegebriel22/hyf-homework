// Write a function that logs to the console numbers 1 to 100.
/* However, if the number is divisible by 3 it should log to the console "This is divisible
by 3"
If it's divisible by 5 it should log "This is divisibleby 5"
If it's divisible by both 3 and 5 it should log "Jackpot!"
Hint: use the modulo operator (%) to figure out if two numbers are divisible. Make
sure the remainder is 0. */

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 & i % 5 === 0) {
        console.log(i + "\n Jackpot!");
    }
    else if (i % 3 === 0) {
        console.log(i + "\n This is divisible by 3");
    }
    else if (i % 5 === 0) {
        console.log(i + "\n This is divisible by 5");
    }
    else
        console.log(i);

}


/* Using JavaScript, create a button and add it to the html (the document).
When the button is clicked, insert an <img> tag to the html with a random image. */

const imgBtn = document.createElement("button")
document.body.appendChild(imgBtn)
imgBtn.innerHTML = "click"
const img = document.createElement("img")
document.body.appendChild(img)


imgBtn.addEventListener("click", () => {
    img.width = 200;
    img.hight = 200;
    img.src = "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

})

/* Make an API call using the Fetch API. Make use of the following API:
https://reqres.in/api/users
Display thefirst_nameof the first three users inthe DOM */
fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(res => {
        const firstThreeNames = res.data.slice(0, 3)
        console.log(firstThreeNames)
        const ul = document.createElement('ul');
        firstThreeNames.forEach(name => {
            const li = document.createElement('li')
            ul.appendChild(li)
            li.innerHTML = `${name.first_name}`

        });
        document.body.appendChild(ul)
    })


/* Create a class called Product. The constructor should have 2 parameters called name
and price. It should have 1 method called logProduct that should log: 'NAME is PRICE
kr'
Here is an example:
const table = new Product('table', 1200);
table.logProduct(); // 'Table costs 1200 kr' */

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    logProduct() {
        console.log(`${this.name} costs ${this.price} kr.`)
    }
}
const table = new Product('table', 1200);
table.logProduct(); // 'Table costs 1200 kr' */

