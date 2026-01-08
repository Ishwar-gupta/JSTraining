const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (events) => {
    events.preventDefault();

    const inputValue = document.querySelector("#inputBox").value;
    const ul = document.getElementById("listItem");

    if (inputValue.trim() === "") return; // Ignore empty input

    // Create a list item
    const li = document.createElement("li");
    li.textContent = inputValue;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.style.color = "white";

    // Add click listener to remove the task
    deleteBtn.addEventListener("click", () => {
        ul.removeChild(li);
    });

    // Append delete button to the li
    li.appendChild(deleteBtn);

    // Append li to the ul
    ul.appendChild(li);

    // Clear the input box
    document.querySelector("#inputBox").value = "";
});
