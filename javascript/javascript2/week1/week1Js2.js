
// shortest Word;
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function shorterword(danishWords) {
    let shortestWord = danishWords[0];
    for (let i = 0; i < danishWords.length; i++) {
        if (danishWords[i].length < shortestWord.length) {
            shortestWord = danishWords[i];
        }
    }
    return shortestWord;
}


console.log(shorterword(danishWords))  // returns 'ø'

///////// Danish Letter Counter

//Find and count the Danish letters
const danishString = "Jeg har en blå bil";

const danishString2 = "Blå grød med røde bær";
//danishString2 // returns {total: 4, æ: 1, ø: 2, å: 1}


let object = {};
function DanishLettersCounter(danishString) {
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let total = 0;
    for (let i = 0; i < danishString.length; i++) {
        if (danishString[i] === 'å' || danishString[i] === 'Å') {
            count1 += 1;
        }
        else if (danishString[i] === 'æ' || danishString[i] === 'Æ') {
            count2 += 1;
        }
        else if (danishString[i] === 'ø' || danishString[i] === 'Ø') {
            count3 += 1;
        }
        total = count1 + count2 + count3;

    }
    return `{total: ${total}, æ:${count2}, ø:${count3}, å:${count1} } `

}
console.log(DanishLettersCounter(danishString2))

///////// spirit Animal Generator

const nameDiv = document.getElementById('name');
nameDiv.innerHTML = 'Name';
let userName = document.createElement("INPUT");
userName.setAttribute("type", "text");
userName.setAttribute("id", "myInput");
nameDiv.appendChild(userName);
const spiritAnimals = ["The Butterfly", "The Spider", "The Owl", "The Hummingbird", "The Hawk", "The Eagle", "The tiger", "The fox", "The horse", "Turtle"]



function spiritAnimalGenerator() {
    let inputVal = document.getElementById("myInput").value;

    const para = document.createElement('p');
    para.setAttribute("id", "outPutText")
    nameDiv.appendChild(para);
    if (isNaN(inputVal) === "string" || inputVal === "") {
        document.getElementById("outPutText").innerHTML = '';
        para.innerText = "Please write your name";
    }
    else if (typeof inputVal === "string") {
        let randNum = Math.floor(Math.random() * 10);
        document.getElementById("outPutText").innerHTML = '';
        para.innerText = `${inputVal} - ${spiritAnimals[randNum]} `;
        document.getElementById("myInput").value = '';
        myButton.innerText = 'click for new sprit animal';
    }
}

const myButton = document.createElement('button');
myButton.setAttribute("id", "myButton");
myButton.innerText = 'Click to generate your spirit Animal';
nameDiv.appendChild(myButton);
myButton.addEventListener("click", spiritAnimalGenerator);

/////////////////////////////////////////////

















