// Homework javascript1-week1

//  Age-ify (A future age calculator)

const yearOfBirth = 1987;
const yearFuture = 2030;
let  age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}.` );

// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2020
const dogYearFuture = 2030;
let yearDifference = dogYearFuture - dogYearOfBirth;
let dogYear = 7 * (yearDifference);
let shouldShowResultInDogYears = 'false';

if (shouldShowResultInDogYears) {
    console.log(`Your dog will be ${dogYear} dog years in ${dogYearFuture}.`);
}
else {
    console.log(`Your dog will be  ${yearDifference} human years in  ${dogYearFuture}.` );
}

// Housey pricey (A house price estimator)
// evaluation for Peter 

var gardenSizeInM2 = [100, 70];
var volumeInMeters = [8*10*10, 5*11*8];
const houseCost = [2500000, 1000000] ;
function housePriceForPeter() {
    return ((volumeInMeters[0] * 2.5 * 1000) + (gardenSizeInM2[0] * 300));
}
var houseExpectedPriceForPeter = housePriceForPeter(); 
if (houseExpectedPriceForPeter < houseCost[0]) {
    console.log(` Peter is paying ${  Math.abs(houseCost[0] - houseExpectedPriceForPeter)}  extra.`);
}
else if (houseExpectedPriceForPeter === houseCost[0]) {
    console.log(' Peter is paying  expected amount.');
}
else {
    console.log(` Peter is paying ${  Math.abs(houseCost[0] - houseExpectedPriceForPeter)}  less.`);
}
 

// evaluation for Julia

function housePriceForJulia() {
    return ((volumeInMeters[1] * 2.5 * 1000) + (gardenSizeInM2[1]* 300));
}
var houseExpectedPriceForJulia = housePriceForJulia();
if (houseExpectedPriceForJulia < houseCost[1]) {
    console.log(` Julia is paying ${Math.abs(houseExpectedPriceForJulia - houseCost[1])} extra.`);
}
else if (houseExpectedPriceForJulia === houseCost[1]) {
    console.log(' Julia is paying  expected amount.');
}
else {
    console.log(` Julia is paying ${Math.abs(houseExpectedPriceForJulia - houseCost[1])} less.`);
}


// Ez Namey (Startup name generator)

const firstWords = ['Unique', 'Green', 'Sunny', 'Reliable', 'Trust', 'Simple', 'Speedy', 'vision', 'Sky', 'Future'];
const secondWords = ['Systems', 'Apps', 'Company', 'Partners', 'Business', 'Associates', 'Technology', 'Consultant', 'Digital', 'Corporates'];

/* generate one random numbers for each of the name arrays, to give flexibility.
One can choose any name from firstWords and match it with any name to secondWords.  */

const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);
let startupName = firstWords[randomNumber1] + ' ' + secondWords[randomNumber2];

console.log('The startup: ' + startupName + ' contains ' + startupName.length + ' characters');
