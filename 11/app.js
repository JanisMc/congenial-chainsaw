const input = document.querySelector("#input");
const button = document.querySelector("#submit");
const list = document.querySelector("#list");
const remove = document.querySelector("#remove");
const listItems = document.querySelectorAll("li")

button.addEventListener("click", () => {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    listItem.addEventListener("mouseover", () => {
        listItem.textContent = listItem.textContent.toUpperCase ();
    });
    listItem.addEventListener("mouseout", () => {
        listItem.textContent = listItem.textContent.toLowerCase ();
    })

    list.appendChild(listItem);
    input.value = "";
})

remove.addEventListener("click", () => {
    list.removeChild(document.querySelector("#list li:last-child"))
})

// for (let listItem of listItems) {
//     listItem.addEventListener("mouseover", () => {
//         listItem.textContent = listItem.textContent.toUpperCase ();
//     });
//     listItem.addEventListener("mouseout", () => {
//         listItem.textContent = listItem.textContent.toLowerCase ();
//     })
// }

document.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.target);
})

list.addEventListener("mouseover", (event) => {
    event.target.textContent = event.target.textContent.toUpperCase();
})

list.addEventListener("mouseout", (event) => {
    event.target.textContent = event.target.textContent.toLowerCase();
})