const styleSheets = document.styleSheets;

const styleSheetsArray = Array.from(styleSheets);
const targetSheet = styleSheetsArray.find((styleSheet) => {
  if (styleSheet?.href) {
    const pathName = new URL(styleSheet.href).pathname.split("/").pop();
    if (pathName === "extra.css") {
      return styleSheet;
    }
  }
});
console.log(targetSheet);
console.log(targetSheet.cssRules);
console.log(targetSheet.cssRules[0]);
console.log(targetSheet.cssRules[0].cssText);
console.log(targetSheet.cssRules[0].style);
console.log(targetSheet.cssRules[0].style.transition);
