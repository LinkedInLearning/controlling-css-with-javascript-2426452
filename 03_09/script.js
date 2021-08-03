const box = document.querySelector(".box");
const control = document.querySelector("#degrees");

control.addEventListener("change", () => {
  box.style.transform = `rotate(${control.value}deg)`;
});
