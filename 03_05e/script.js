const styleSheet = document.styleSheets[0];

let headingOpacity = styleSheet.cssRules[2].style.opacity;

console.log(headingOpacity);
headingOpacity = headingOpacity + 0.2;
console.log(headingOpacity)

// console.log(styleSheet.cssRules[2]);
let typedHeadingOpacity = styleSheet.cssRules[2].styleMap.get("opacity").value;
console.log(typedHeadingOpacity)
console.log(typeof(typedHeadingOpacity))
typedHeadingOpacity = typedHeadingOpacity + 0.2;
console.log(typedHeadingOpacity)