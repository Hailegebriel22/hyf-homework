
/*Create an array of bad movies
Creat an array of bad movies since year 2000 */

function badMoviesRating() {
    fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
        .then(Response => Response.json())
        .then(movies => {
            const badMovies = movies.filter(movie => movie.rating <= 4)
            console.log(badMovies)
            badMoviesSince2000 = badMovies.filter(badMovies => badMovies.year >= 2000)
            console.log(badMoviesSince2000)


        })
}
//badMoviesRating()


function resolveTimer(resolveAfter) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, resolveAfter * 1000);
    });
}
resolveTimer(5).then(() => {
    console.log("I am called asynchronously")
})

function setTimeoutPromises(miliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log(`Called after ${miliseconds / 1000} seconds`));
        }, miliseconds);
    })
}
setTimeoutPromises(3000).then()
//setTimeoutPromises(3000).then(() => {
// console.log(`Called after ${miliseconds/1000} seconds`);
//});


function getCurrentLocation() {
    return new Promise(function (resolve, reject) {


        // Promisifying the geolocation API
        navigator.geolocation.getCurrentPosition(
            (pos) => resolve(`lat-${pos.coords.latitude} long-${pos.coords.longitude}`),
            (error) => reject(`error getting the user location`)
        );
    });
};

getCurrentLocation()
    .then((pos) => {
        // called when the users position is found
        console.log(pos);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });

function getData() {
    fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(astronauts => {
            console.log(astronauts);
        }
        )
}



function timeoutPromise() {
    return new Promise((thenFetching, reject) => {
        setTimeout(() => {
            const url = 'http://api.open-notify.org/astros.json';
            thenFetching(fetch(url))
        }, 3000);
    })
}



timeoutPromise()
    .then()
    .then(res => {
        console.log(res);
    })

async function awaitFetching() {

    const res = await fetch('http://api.open-notify.org/astros.json')
    const astronauts = await res.json();
    console.log(astronauts);

}
setTimeout(awaitFetching, 3000);

