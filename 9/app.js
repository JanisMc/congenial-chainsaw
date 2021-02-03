const input = document.querySelector("#input");
const button = document.querySelector("#submit");
let list = document.querySelector("#list");
let remove = document.querySelector("#remove");

button.addEventListener("click", () => {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;

    list.appendChild(listItem);
    input.value = "";
})

remove.addEventListener("click", () => {
    list.removeChild(document.querySelector("#list li:last-child"))
})