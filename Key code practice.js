let keyCodeListEl = document.getElementById("keyCodeList");
let userInputEl = document.getElementById("userInput");

function createAndAppenKeycode(key) {
    let listEl = document.createElement("li");
    listEl.textContent = key;
    keyCodeListEl.appendChild(listEl);
}

function keyCodes(event) {
    createAndAppenKeycode(event.keycode);
}

userInputEl.addEventListener("keydown", keyCodes)