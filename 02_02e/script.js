const heading = document.querySelector(".masthead h1");
const computedStyles = window.getComputedStyle(heading);

console.log(computedStyles.fontSize);

console.log(computedStyles.getPropertyValue("font-size"));

