const userName = "";
const todoList = [];

// addTodo function to add todos on todoList.

function addTodo(command) {

    if (command.includes("Add") && command.includes("to my todo")) {
        let todo = command.substring(4, command.lastIndexOf("to my todo") - 1);
        todoList.push(todo);
        return `${todo} added to your todo`;

    }
    else {
        "You need to use a proper command to add on your todos!"
    }
}

// removeTodos  function to remove todos from todoList

function removeTodos(command) {
    if (command.includes("Remove") && command.includes("from my todo")) {
        let removeTodo = command.substring(7, command.lastIndexOf("from my todo") - 1);
        todoList.splice(todoList.indexOf(removeTodo), 1);
        return `Removed ${removeTodo} from your todo`;

    }
    else {
        return "Please use proper command!"
    }

}

// doMath function  for calculating simple math

function doMath(command) {
    if (command.includes("what is") && command.includes("+")) {
        const numb = command.match(/(?<=^|[-+*/])\-\d+|\d+|[-+*/]/g);
        return Math.floor(numb[0]) + Math.floor(numb[2]);
    }
    else if (command.includes("what is") && command.includes("*")) {
        const numb = command.match(/(?<=^|[-+*/])\-\d+|\d+|[-+*/]/g);
        return Math.floor(numb[0]) * Math.floor(numb[2]);
    }
    else if (command.includes("what is") && command.includes("/")) {
        const numb = command.match(/(?<=^|[-+*/])\-\d+|\d+|[-+*/]/g);
        return Math.floor(numb[0]) / Math.floor(numb[2]);
    }
    else if (command.includes("what is") && command.includes("-")) {
        const numb = command.match(/(?<=^|[-+*/])\-\d+|\d+|[-+*/]/g);
        return Math.floor(numb[0]) - Math.floor(numb[2]);
    }
    else {
        return "Please use proper command!"
    }
}


function getReply(command) {
    if (command === " " || typeof command !== "string") {
        return "Not a valid command.";
    }
    else if (command.includes("my name is") && userName.length === 0) {
        userName = command.split(" ").pop();
        return `Nice to meet you ${userName}.`;
    }
    else if (command.includes("my name is") && command.includes(userName)) {
        return "You have already introduced your name.";
    }

    else if (command === "what is my name?") {
        if (userName === "" || typeof (userName) !== "string") {
            return "You havn't introduced yourself. What is your name?";

        }
        else {
            return `Your name is ${userName}.`;
        }
    }
    else if (command.includes("Add") && command.includes("to my todo")) {
        return addTodo(command);
    }
    else if (command.includes("Remove") && command.includes("from my todo")) {
        return removeTodos(command);
    }
    else if (command === "What is on my todo?") {
        return `You have ${todoList.length} todos- ${todoList.join(',')}.`;

    }
    else if (command === "What day is it today?") {
        const today = new Date();
        return `${today.getDate()} of ${today.toLocaleString('default', { month: 'long' })} ${today.getFullYear()}.`;
    }
    else if (command.includes("what is") && (command.includes("+") || command.includes("-") || command.includes("*") || command.includes("/"))) {
        return doMath(command);
    }
    else if (command === "Set a timer for 4 minutes") {
        setTimeout(console.log, 4 * 60 * 1000, "Timer done");
        return "Timer set for 4 minutes."
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
            return "Currency rate is not avilable.";
        }
    }
    else {
        return "I don't understand.";
    }
}
console.log(getReply("my name is Haile"))//Nice to meet you Haile.
console.log(getReply("my name is Haile"))// You have already introduced your name.
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