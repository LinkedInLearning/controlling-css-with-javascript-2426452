const styleSheet = document.styleSheets[0];

// Ruleset text before:
console.log(styleSheet.cssRules[2].cssText);

styleSheet.cssRules[2].style.setProperty("background-color", "skyblue");
console.log(styleSheet.cssRules[2].style.getPropertyValue("background-color"));
styleSheet.cssRules[2].style.setProperty("max-inline-size", "65rem");
console.log(styleSheet.cssRules[2].style.getPropertyValue("max-inline-size"));
styleSheet.cssRules[2].style.removeProperty("margin-inline");

// Ruleset text after:
console.log(styleSheet.cssRules[2].cssText);
