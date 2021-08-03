const listItem = document.querySelector(".animals li:nth-child(5) a");

listItem.style.backgroundColor = "orange";
// listItem.setAttribute("style", "font-style: italic;");
listItem.style.fontStyle = "italic"

console.log(listItem.getAttribute("style"));