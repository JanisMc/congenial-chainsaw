const input = document.querySelector("#input");
const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    // console.log(listItem);
})