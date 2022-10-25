const containerEl = document.querySelector(".container")

const btnEl = document.querySelector(".btn")

const popupContainerEl = document.querySelector(".popup-container")

const closeIconEl = document.querySelector(".close-icon")

btnEl.addEventListener("click", () => {
    containerEl.classList.add("active");
    popupContainerEl.classList.remove("active");
})

closeIconEl.addEventListener("click", () => {
    containerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
})

// CAT FACTS

document.addEventListener("DOMContentLoaded", () => {
    let catFactButton = document.getElementById("catfacts-btn");
    catFactButton.addEventListener("click", fetchRandomCatFact);
})

function fetchRandomCatFact () {
    const catFactUrl = "https://catfact.ninja/fact";
    fetch(catFactUrl)
        .then((resp) => resp.json())
        .then((data) => showCatFact(data));
}

function showCatFact(data) {
    let catFactDiv = document.getElementById("showfacts-p");

    //remove existing text
    let catFactP = catFactDiv.lastElementChild;
    catFactDiv.removeChild(catFactP);

    //create element for new text
    let newCatFactContainer = document.createElement("p");
    newCatFactContainer.innerHTML = data.fact;

    //append new element
    catFactDiv.appendChild(newCatFactContainer);
}