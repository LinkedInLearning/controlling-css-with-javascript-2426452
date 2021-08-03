const hue = document.querySelector("#hue");
const saturation = document.querySelector("#saturation");
const lightness = document.querySelector("#lightness");
const alpha = document.querySelector("#alpha");
const colorSwatch = document.querySelector(".color-swatch");

const rootRules = document.styleSheets[0].cssRules[0];

/**
 * Change the text color based on the lightness value.
 * @param {string} lightness - current lightness value.
 */
const bw = (lightness) => {
  if (lightness < 50) {
    colorSwatch.style.color = "white";
  } else {
    colorSwatch.style.color = "black";
  }
};

/**
 * Update .color-swatch to the current selected color combination.
 * @param {string} prop - current property name
 * @param {string} value - current property value 
 */
const updateDisplay = (prop, value) => {
  // Set :root custom property value.
  rootRules.style.setProperty(`--${prop}`, value);

  // If the changed property is lightness, call function bw.
  if (prop === "lightness") {
    bw(value);
  }

  // Get the computed styles for the .color-swatch object.
  // (Easy way of capturing the current custom property values.)
  const currentColors = window.getComputedStyle(colorSwatch);

  // Create new HSLA lets and populate with either new or existing value.
  let hue = prop === "hue" ? value : currentColors.getPropertyValue("--hue");
  let saturation =
    prop === "saturation"
      ? value
      : currentColors.getPropertyValue("--saturation");
  let lightness =
    prop === "lightness"
      ? value
      : currentColors.getPropertyValue("--lightness");
  let alpha =
    prop === "alpha" ? value : currentColors.getPropertyValue("--alpha");

  // Set text of .color-swatch to current values.
  colorSwatch.innerHTML = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha});`;
};

/**
 * Listen for changes to slider inputs.
 */
hue.addEventListener("input", () => {
  updateDisplay("hue", hue.value);
});

saturation.addEventListener("input", () => {
  updateDisplay("saturation", saturation.value);
});

lightness.addEventListener("input", () => {
  updateDisplay("lightness", lightness.value);
});

alpha.addEventListener("input", () => {
  let alphaValue = parseInt(alpha.value) / 100;
  updateDisplay("alpha", alphaValue);
});
