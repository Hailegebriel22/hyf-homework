/* Create a site where a user can search for any word.
 When searching a word the application will find a gif using the searched word 
 using the giphy api: https://developers.giphy.com/docs/ 
 Here is how it is going to work: The user can write some text indicating the gif he is looking for,
 click a button and then a gif will be found (using the searched word) and the gif will be displayed to the user.
Add an input element, where the user can specify how many gif results the user wants. */


const gifDiv = document.getElementById("gifwrapper");
const ul = document.createElement('ul')
const numberOfGifs = document.getElementById("numgifs")
function searchGif() {
    removeAllChildNodes(ul)
    const term = document.getElementById("term");
    const validCheck = document.getElementById("validcheck");
    document.body.appendChild(validCheck)
    if (term.value === "") {
        validCheck.innerHTML = "Please write a term or a phrase";
    }
    else if (term.value !== "" && numberOfGifs.value === "") {
        validCheck.innerText = "";

        fetch(`https://api.giphy.com/v1/gifs/search?api_key=M4XaZ6kBBkdqEp7sAG7G84ooSleis3RH&q=${term.value}&limit=25&offset=0&rating=g&lang=en
    `)
            .then(response => response.json())
            .then(data => dislpayGif(data))
    }

    else if (term.value !== "" && numberOfGifs.value !== "") {
        validCheck.innerText = "";
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=M4XaZ6kBBkdqEp7sAG7G84ooSleis3RH&q=${term.value}&limit=${numberOfGifs.value}&offset=0&rating=g&lang=en
    `)
            .then(response => response.json())
            .then(data => dislpayGif(data))
    }

}
function dislpayGif(data) {
    {
        metaImage = data.data.map(img => img.images)

        metaImage.forEach(element => {
            const li = document.createElement("li")
            li.style.listStyle = "none";
            const img = document.createElement("img")
            img.src = element.fixed_width_downsampled.url;
            li.appendChild(img)
            ul.appendChild(li)

            document.body.appendChild(ul)

        })

    }
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const mybtn = document.getElementById("mybtn")
mybtn.addEventListener('click', () => {
    searchGif()

})