let inputs = document.getElementById("inp");
let text = document.querySelector("#text");

function add() {
    if (inputs.value == "") {
        alert("You have not written anything! Please write");
    } else {
        let newElement = document.createElement("ul");
        newElement.innerHTML = `${inputs.value} <i class="material-symbols-outlined">delete</i>`;
        text.appendChild(newElement);
        inputs.value = "";
        newElement.querySelector("i").addEventListener("click", function () {
            newElement.remove();
        })
    }
}