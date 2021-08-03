const styleSheet = document.styleSheets[0];
console.log(styleSheet.cssRules[2].style.maxInlineSize);
console.log(styleSheet.cssRules[2].style.getPropertyValue("max-inline-size"));
