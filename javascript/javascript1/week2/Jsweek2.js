// Flight booking fullname function


const personData1 = ["Benjamin", "Hughes", true, "male"];
const personData2 = ["Lukas", "Andrias", false, "male"];
const personData3 = ["Sofia", "Larsen", true, "female"];
function getFullname(firstname, surname) {
   if (firstname === "" || surname === "" || typeof firstname !== "string" ||
      typeof surname !== "string") {
      return `Please enter a valid name.`
   }
   return ` ${firstname} ${surname}`;
}
console.log(getFullname(personData1[0], personData1[1]));
console.log(getFullname(personData2[0], personData2[1]));

// Formal fullname 


function getFullname(firstname, surname, useFormalName) {
   if (firstname === "" || surname === "" || typeof firstname !== "string" ||
      typeof surname !== "string") {
      return `Please enter a valid name.`
   }
   else if (useFormalName) {
      return `Lord ${firstname} ${surname}`;
   }
   else
      return `${firstname} ${surname}`;
};
console.log(getFullname(personData1[0], personData1[1], personData1[2]));
console.log(getFullname(personData2[0], personData2[1], personData2[2]));

//  Formal fullname gender specific 

function getFullname(firstname, surname, useFormalName, gender) {
   if (firstname === "" || surname === "" || typeof firstname !== "string" ||
      typeof surname !== "string") {
      return `Please enter a valid name.`
   }
   else if (useFormalName) {
      if (gender === "female") {
         return `Lady ${firstname} ${surname}`;
      }
   }
   else if (gender === "male" && useFormalName) {
      return `Lord ${firstname} ${surname}`;
   }
   else
      return `${firstname} ${surname}`;
}
console.log(getFullname(personData1[0], personData1[1], personData1[2], personData1[3]));
console.log(getFullname(personData2[0], personData2[1], personData2[2], personData2[3]));
console.log(getFullname(personData3[0], personData3[1], personData3[2], personData3[3]));


//   Weather wear

function whatToWear(temp) {
   if (temp <= 5) {
      return console.log('Wear winter jacket and winter shoe.');
   }
   else if (temp <= 10) {
      return console.log('Wear light jacket.');
   }
   else if (temp <= 19) {
      return console.log('Wear sweater.');
   }
   else
      return console.log('shorts and a t-shirt.');

};
whatToWear(0);



// Event application 

let today = new Date();
console.log(today.getDay());
let weekDayOfToday = today.getDay();

const weekDays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

function eventDate(x) {
   if ((weekDayOfToday + x) < 7) {
      return weekDays[weekDayOfToday + x];
   }
   else ((weekDayOfToday + x) >= 7)

   /*If sum of weekDayOfToday and event date larger than 7, 
     use reminder value  to get the value from array weekDays */

   const rem = (weekDayOfToday + x) % 7;
   return console.log(weekDays[rem]);
}
eventDate(10);



// Student manager

const class07Students = [];
function addStudentToClass(studentName) {

   if (studentName === " " || studentName !== undefined) {
      return console.log(`cannot be  empty`);
   }
   else if (class07Students.length >= 6 && studentName == "Queen") {
      return class07Students.push(studentName);
   }
   else if (class07Students.length >= 6) {
      return console.log("Cannot add more students to class 07")
   }
   else if (class07Students.includes(studentName)) {
      return console.log(`Student ${studentName} is already in the class`);
   }

   else
      return class07Students.push(studentName)
}
addStudentToClass(true);
addStudentToClass(" ");
addStudentToClass("Mercury");
addStudentToClass("Venus");
addStudentToClass("Earth");
addStudentToClass("Mars");
addStudentToClass("Jupiter");
addStudentToClass("Saturn");
addStudentToClass("Queen");


console.log(class07Students);


function getNumberOfStudents() {
   return class07Students.length;
}
console.log(getNumberOfStudents())


// Candy helper 
const boughtCandyPrices = [];

const candyType = ["sweet", "chocolate", "toffee", "chewing-gum"];
const pricePerWeight = [0.5, 0.7, 1.1, 0.03];


// addCandy function

function addCandy(candyType, weight) {
   if (candyType == "sweet") {
      return boughtCandyPrices.push(0.5 * weight);
   }
   else if (candyType == "chocolate") {
      return boughtCandyPrices.push(0.7 * weight);
   }
   else if (candyType == "toffee") {
      return boughtCandyPrices.push(1.1 * weight);
   }
   else
      return boughtCandyPrices.push(0.03 * weight);
}

// switch 

/* function addCandy(candyType, weight) {
  switch (candyType) {
     case "Sweet":
        boughtCandyPrices.push(weight * 0.5);
        break;
     case "Chocolate":
        boughtCandyPrices.push(weight * 0.7);
        break;
     case "Toffee":
        boughtCandyPrices.push(weight * 1.1);
        break;
     case "Chewing-gum":
        boughtCandyPrices.push(weight * 0.03);
        break;
  }
  return boughtCandyPrices;
} */

// Adding to candy types sweet (40g) and Chocolate(50g)

addCandy("sweet", 40);
addCandy("chocolate", 50);
console.log(boughtCandyPrices)


const amountToSpend = Math.random() * 100;



let totalPriceCandy = 0;

function canBuyMoreCandy(totalPriceCandy) {
   for (let i = 0; i < boughtCandyPrices.length; i++) {
      totalPriceCandy += boughtCandyPrices[i];
   }
   if (totalPriceCandy < amountToSpend) {
      console.log(`You still have ${amountToSpend - totalPriceCandy} cash to spend.You can buy more, so please do!`);
   }
   else
      console.log(`You are about to spend ${totalPriceCandy - amountToSpend} more. Enough candy for you!`);
}
canBuyMoreCandy(totalPriceCandy)


