const listItem = document.querySelector(".animals li:nth-child(6) a");
console.log(listItem.style.getPropertyValue("--color"));

const styleSheet = document.styleSheets[0];
console.log(styleSheet.cssRules[0].style.getPropertyValue("--max-width"));
