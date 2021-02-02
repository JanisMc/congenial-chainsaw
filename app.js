const image = document.querySelector("#cat");
console.log(image.style);

const button = document.querySelector("#submit");

const imageToggle = () => {
    // hide
    if (image.style.display === "none") {
        console.log(1);
        image.style.display = "block";
        button.textContent = "hide";
    } else {
        console.log(2);
        image.style.display = "none";
        button.textContent = "show";
    }
}

button.addEventListener("click", imageToggle);



