const button = document.querySelector("#button");
const input = document.querySelector("#input");
const form = document.querySelector("#list-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value) {
    const form2 = document.querySelector("#form");
    const ul = document.querySelector("#list");
    form2.appendChild(ul);

    const listItem = document.createElement("li");
    const text = input.value;
    listItem.innerText = text;
    ul.appendChild(listItem);

    const iconRemove = document.createElement("span");
    iconRemove.innerText = "delete";
    iconRemove.classList.add("material-icons");
    listItem.appendChild(iconRemove);

    iconRemove.addEventListener("click", (e) => {
      e.preventDefault();
      const listItem = iconRemove.closest("li");
      listItem.remove();
    });
  }
});
