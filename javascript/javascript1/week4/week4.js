const userName = [];
const todoList = [];

function getReply(command) {
    if (command === " " || typeof command !== "string") {
        return `Not a valid command.`;
    }
    else if (command.includes("my name is") && userName.length === 0) {
        userName.push({ "name": command.split(" ").pop() });
        return `Nice to meet you ${command.split(" ").pop()}.`;
    }
    else if (command.includes("my name is") && command.includes(`${userName[0].name}`)) {
        return `You already introduce your name.`;
    }

    else if (command === "what is my name?") {
        if (userName[0].name === "" || typeof (userName[0].name) !== "string") {
            return `You don't introduce yourself. What is your name?`;

        }
        else {
            return `Your name is ${userName[0].name}.`;
        }
    }
    else if (command === "Add fishing to my todo") {
        todoList.push("fishing");
        return `Fishing added to your todo.`;
    }
    else if (command === "Add singing in the shower to my todo") {
        todoList.push("Singing in the shower");
        return `Singing in the shower added to your todos.`;
    }

    else if (command === "Remove fishing from my todo") {
        todoList.splice(todoList.indexOf('fishing'), 1);
        return `Removed fishing from your todo.`
    }
    else if (command === "What is on my todo?") {
        return `You have ${todoList.length} todos- ${todoList.join(',')}.`;

    }
    else if (command === "What day is it today?") {
        let today = new Date();
        return `${today.getDate()} of ${today.toLocaleString('default', { month: 'long' })} ${today.getFullYear()}.`;
    }
    else if (command.includes("what is") && command.includes("+")) {
        let numb = command.match(/(?<=^|[-+*/])\-\d+|\d+|[-+*/]/g);
        console.log(numb)
        return `${Math.floor(numb[0]) + Math.floor(numb[2])}`;
    }
    else if (command.includes("what is") && command.includes("*")) {
        let numb = command.match(/(?<=^|[-+*/])\-\d+|\d+|[-+*/]/g);
        return Math.floor(numb[0]) * Math.floor(numb[2]);
    }
    else if (command.includes("what is") && command.includes("/")) {
        let numb = command.match(/(?<=^|[-+*/])\-\d+|\d+|[-+*/]/g);
        return Math.floor(numb[0]) / Math.floor(numb[2]);
    }
    else if (command.includes("what is") && command.includes("-")) {
        let numb = command.match(/(?<=^|[-+*/])\-\d+|\d+|[-+*/]/g);
        return `${Math.floor(numb[0]) - Math.floor([2])}`;
    }
    else if (command === "Set a timer for 4 minutes") {
        setTimeout(console.log, 4 * 60 * 1000, "Timer done");
        return `Timer set for 4 minutes.`
    }
    // command for currency.
    else if (command.includes("How many") && /\d/.test(command)) {
        let rate = { 'DKK': { 'EUR': 0.13, 'USD': 0.14 }, 'USD': { 'DKK': 7.12, 'EUR': 0.96 } };
        if (command.includes("How many danish krone") && /\d/.test(command) && command.includes(" US dollars?")) {
            return `It will be ${command.replace(/[^0-9]/g, '') * rate['USD'].DKK} danish krone.`;
        }
        else if (command.includes("How many US dollars") && /\d/.test(command) && command.includes(" danish krone?")) {
            return `It will be ${command.replace(/[^0-9]/g, '') * rate['DKK'].USD} US dollars.`;
        }
        else if (command.includes("How many euros") && /\d/.test(command) && command.includes(" danish krone?")) {
            return `It will be ${command.replace(/[^0-9]/g, '') * rate['DKK'].EUR} euros.`;
        }
        else {
            return `Currency rate is not avilable.`;
        }
    }
    else {
        return `I don't understand.`;
    }
}
console.log(getReply("my name is Haile"))//Nice to meet you Haile.
console.log(getReply("my name is Haile"))// You already introduce your name.
console.log(getReply("what is my name?"))//Your name is Haile.
console.log(getReply(`Add fishing to my todo`))//Fishing added to your todo.
console.log(getReply(`Add singing in the shower to my todo`))//Singing in the shower added to your todos.
console.log(getReply(`Remove fishing from my todo`))//Removed fishing from your todo.
console.log(getReply("What is on my todo?"))//You have 1 todos- Singing in the shower.
console.log(getReply("What day is it today?"))//16 of June 2022.
console.log(getReply("what is 12165 / 1283"))//9.481683554169914
console.log(getReply("Set a timer for 4 minutes"))//Timer set for 4 minutes.
console.log(getReply("How many danish krone is 100 US dollars?"))//It will be 712 danish krone.
console.log(getReply("How many US dollars is 100 danish krone?"))//It will be 14.000000000000002 US dollars.
console.log(getReply("How many euros is 100 danish krone?"))//It will be 13 euros.
  //Timer done