const redCircle = document.querySelector('ul.marks li:nth-child(1)');
const blueCircle = document.querySelector('ul.marks li:nth-child(2)');
const greenCircle = document.querySelector('ul.marks li:nth-child(3)');
const span = document.querySelector('span');

const Circles = [redCircle, blueCircle, greenCircle];
function circleMove(xBox, circleFrame) {
    return {
        x: circleFrame.x - (xBox.getBoundingClientRect()).left,
        y: circleFrame.y - (xBox.getBoundingClientRect()).top
    }
};



// target position to move 
const redTarget = circleMove(redCircle, { x: 20, y: 300 });
const blueTarget = circleMove(blueCircle, { x: 400, y: 300 });
const greenTarget = circleMove(greenCircle, { x: 400, y: 20 });
async function translateOneByOne() {
    await moveElement(redCircle, redTarget).then(() => {
        console.log("Red circle has been moved");
    })
    await moveElement(blueCircle, blueTarget).then(() => {
        console.log("Blue circle has been moved");
    })
    await moveElement(greenCircle, greenTarget).then(() => {
        console.log("Green circle has been moved");
    })

}
//translateOneByOne()

function translateAllAtOnce() {
    const promise1 = moveElement(redCircle, redTarget)
    const promise2 = moveElement(blueCircle, blueTarget)
    const promise3 = moveElement(greenCircle, greenTarget)
    Promise.all([promise1, promise2, promise3])
        .then(() => {
            console.log("All circles have moved their targets at once.");
        })

}


translateAllAtOnce()