// Homework javascript1-week1

//  Age-ify (A future age calculator)

var yearOfBirth = 1987;
var yearFuture = 2030;
var age = yearFuture - yearOfBirth;
console.log('You will be ' + age + ' years old in ' + yearFuture);

// Goodboy-Oldboy (A dog age calculator)

var dogYearOfBirth = 2020
var dogYearFuture = 2030;
var yearDifference = dogYearFuture - dogYearOfBirth;
var dogYear = 7 * (yearDifference);
let shouldShowResultInDogYears = 'false';

if (shouldShowResultInDogYears == 'true') {
    console.log('Your dog will be ' + dogYear + ' dog years in ' + dogYearFuture)
}
else {
    console.log('Your dog will be ' + yearDifference + ' Human years in ' + dogYearFuture)
}

// Housey pricey (A house price estimator)
// evaluation for Peter 

var wideForPeter = 8;
var deepForPeter = 10;
var heightForPeter = 10;
var gardenSizeInM2ForPeter = 100;
var volumeInMetersForPeter = wideForPeter * deepForPeter * heightForPeter;
const houseCostPeter = 2500000;
function housePriceForPeter() {
    return ((volumeInMetersForPeter * 2.5 * 1000) + (gardenSizeInM2ForPeter * 300));
}
var houseExpectedPriceForPeter = housePriceForPeter();
if (houseExpectedPriceForPeter < houseCostPeter) {
    console.log(' Peter is paying ' + Math.abs(houseCostPeter - houseExpectedPriceForPeter) + ' extra.')
}
else if (houseExpectedPriceForPeter == houseCostPeter) {
    console.log(' Peter is paying  expected amount.')
}
else {
    console.log(' Peter is paying ' + Math.abs(houseExpectedPriceForPeter - houseCostPeter) + ' less.')
}

// evaluation for Julia

var wideForJulia = 5;
var deepForJulia = 11;
var heightForJulia = 8;
var gardenSizeInM2ForJulia = 70;
var volumeInMetersForJulia = wideForJulia * deepForJulia * heightForJulia;
const houseCostJulia = 1000000;
function housePriceForJulia() {
    return ((volumeInMetersForJulia * 2.5 * 1000) + (gardenSizeInM2ForJulia * 300));
}
var houseExpectedPriceForJulia = housePriceForJulia();
if (houseExpectedPriceForJulia < houseCostJulia) {
    console.log(' Julia is paying ' + Math.abs(houseCostJulia - houseExpectedPriceForJulia) + ' extra.')
}
else if (houseExpectedPriceForJulia == houseCostJulia) {
    console.log(' Julia is paying  expected amount.')
}
else {
    console.log(' Julia is paying ' + Math.abs(houseExpectedPriceForJulia - houseCostJulia) + ' less.')
}





// Ez Namey (Startup name generator)

let firstWords = ['Unique', 'Green', 'Sunny', 'Reliable', 'Trust', 'Simple', 'Speedy', 'vision', 'Sky', 'Future']
let secondWords = ['Systems', 'Apps', 'Company', 'Partners', 'Business', 'Associates', 'Technology', 'Consultant', 'Digital', 'Corporates']

/* generate one random numbers for each of the name arrays, to give flexibility.
One can choose any name from firstWords and match it with any name to secondWords.  */

const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);
let startupName = firstWords[randomNumber1] + ' ' + secondWords[randomNumber2]

console.log('The startup: ' + startupName + ' contains ' + startupName.length + ' characters')
