const styleSheet = document.styleSheets[0];

console.log(styleSheet.cssRules[2]);

let maxInlineValue = styleSheet.cssRules[2].styleMap.get("max-inline-size").value;
let maxInlineUnit = styleSheet.cssRules[2].styleMap.get("max-inline-size").unit;

console.log(`maxInlineValue = ${maxInlineValue}, maxInlineUnit = ${maxInlineUnit}`);

styleSheet.cssRules[2].styleMap.set("max-inline-size", `${maxInlineValue * 2}${maxInlineUnit}`);
console.log(styleSheet.cssRules[2].style.maxInlineSize);

styleSheet.cssRules[2].styleMap.set("background-color", "skyblue");
console.log(styleSheet.cssRules[2].style.backgroundColor);
