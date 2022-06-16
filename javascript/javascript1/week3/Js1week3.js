//Item array removal

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];
const nameToRemove = "Ahmad";
const indexNameToRemove = names.indexOf("Ahmad");
names.splice(indexNameToRemove, 1);

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'] */

//When will we be there??

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function timeToDestination(speed, destinationDistance) {
    arrivingTime = destinationDistance / speed;
    diff = arrivingTime - Math.floor(arrivingTime);
    if (diff == 0) {
        return console.log(`You will arrive in ${arrivingTime} hours`);
    }

    else
        return console.log(`You will arrive in ${Math.floor(arrivingTime)} hours and ${Math.round(diff * 60)} minutes`);
}


timeToDestination(50, 432); // 8 hours and 38 minutes


//Series duration of my life

const seriesDurations = [
    {
        title: "friends",
        days: 4,
        hours: 2,
        minutes: 20,
    },
    {
        title: "Breaking Bad",
        days: 6,
        hours: 0,
        minutes: 50,
    },
    {
        title: "Modern family",
        days: 10,
        hours: 9,
        minutes: 0,
    },
];
expectedAge = 80 * 365;
function percentageOfAge(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        const totalDayFormat = [];
        const percentage = [];
        totalDayFormat[i] = (array[i].days + (array[i].hours / (24)) + (array[i].minutes / (24 * 60)));
        percentage[i] = (totalDayFormat[i] / expectedAge) * 100;
        result = console.log(`${array[i].title} took ${percentage[i].toFixed(3)}% of my life.`);
        sum += totalDayFormat[i];
        totalPercentage = (sum / expectedAge) * 100;

    }
    console.log(`In total that is ${totalPercentage.toFixed(3)} of my life`);
    return result;
}
percentageOfAge(seriesDurations)

const notes = [];
function saveNote(content, id) {
    return notes.push({ content, id });

}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("water the plants", 3);



function getNote(id) {
    if (typeof id !== 'number' || typeof id === null || id > notes.length) {
        return console.log(`It is an error string`);
    }

    else {

        for (let i = 0; i <= notes.length; i++) {

            if (id == notes[i].id) {
                return console.log(notes[i])
            }

        }

    }
}

getNote(3)
//
function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {

        noteFormat = console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}.`)
    }
    return noteFormat;
}
logOutNotesFormatted()

//  Usage limit
let activities = [];
function addActivity(date, activity, duration) {
    if (typeof date === 'string' && typeof activity === 'string' && typeof duration === 'number')

        return activities.push({ date, activity, duration })
    else
        return console.log(`It is not a valid data type.`)
}


addActivity("07/6-22", "Youtube", 30);
addActivity("07/6-22", "TikTok", 30);
addActivity()

//addActivity("07/06-22", "Twitter", 60);

function showStatus(activities) {
    let activitySum = 0;
    for (let i = 0; i < activities.length; i++) {
        activitySum += activities[i].duration;
    }
    if (activities.length == 0) {
        return console.log(`Add some activities before calling showStatus.`);
    }

    else if (activitySum <= 120) {

        return console.log(`You have added ${activities.length} activities. They amount to ${activitySum} min. of usage`)
    }
    else
        return console.log(`You have reached your limit, no more smartphoning for you!`)

}
showStatus(activities)


// Extra feature
// Twe don't need to specify the date,the function automatically figures out the date.

const options = { weekday: 'narrow', year: '2-digit', month: '2-digit', day: 'numeric' };
let today = new Date();
date = today.toLocaleDateString(undefined, options);
function addActivity(date, activity, duration) {
    if (typeof date == 'string' && typeof activity == 'string' && typeof duration == 'number')
        return activities.push({ date, activity, duration })
}


// Create a function for calculating the activity a user has spent the most time on.
addActivity(date, "Youtube", 30);
addActivity(date, "TikTok", 45);
addActivity(date, "Twitter", 60);

function activitySpentMore(activities) {
    let mostSpend = activities[0].duration;
    for (let i = 1; i < activities.length; i++) {
        if (mostSpend < activities[i].duration) {
            mostSpend = activities[i].duration;
            mostSpendActivity = activities[i].activity;
        }

    }


    return console.log(`You spend ${mostSpend} min on ${mostSpendActivity} `)

}
activitySpentMore(activities) 