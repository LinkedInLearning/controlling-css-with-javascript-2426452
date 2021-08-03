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
targetSheet.cssRules[0].style.backgroundColor = "hsl(120, 57%, 20%)";
targetSheet.cssRules[0].style.borderRadius = "1rem";
