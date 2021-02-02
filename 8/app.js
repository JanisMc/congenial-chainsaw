const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const list = document.querySelector("#list");

submit.addEventListener("click", () => {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    list.appendChild(listItem);
    console.log(listItem);
    input.value = "";
})