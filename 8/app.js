const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const list = document.querySelector("#list");
const button = document.querySelector("#showhide-btn");

submit.addEventListener("click", () => {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    list.appendChild(listItem);
    console.log(listItem);
    input.value = "";
})

button.addEventListener("click", () => {
    console.log("button");
    if (list.style.display === "none") {
        button.textContent = "hide";
        list.style.display = "block";
        // console.log(1);
    } else {
        list.style.display = "none";
        button.textContent = "show";
        // console.log(2);
    }
})