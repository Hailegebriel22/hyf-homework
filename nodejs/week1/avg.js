
const array = process.argv.slice(2).map(num => Number(num));
if (array.length === 0) {
    console.log('No arguments are provided')
} else if (array.every(element => !isNaN(element))) {
    const average = array.reduce((a, b) => a + b) / array.length;
    console.log(average)
} else {
    console.log('Provided arguments are not numbers')
}
// / (process.argv.length-2)