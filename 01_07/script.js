const styleSheets = document.styleSheets;
const listButton = document.getElementById("list");
const gridButton = document.getElementById("grid");

const styleSheetsArray = Array.from(styleSheets);
const targetSheet = styleSheetsArray.find((styleSheet) => {
  if (styleSheet?.href) {
    const pathName = new URL(styleSheet.href).pathname.split("/").pop();
    if (pathName === "grid.css") {
      return styleSheet;
    }
  }
});

targetSheet.disabled = true;
listButton.classList.add("current");

const highlightSelected = (targetID) => {
  if (targetID === "grid") {
    listButton.classList.remove("current");
    gridButton.classList.add("current");
  } else {
    gridButton.classList.remove("current");
    listButton.classList.add("current");
  }
};

listButton.addEventListener("click", (e) => {
  highlightSelected(e.target.id);
  targetSheet.disabled = true;
});

gridButton.addEventListener("click", (e) => {
  highlightSelected(e.target.id);
  targetSheet.disabled = false;
});
