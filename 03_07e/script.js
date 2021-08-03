const listItem = document.querySelector(".animals li:nth-child(5) a");

listItem.style.backgroundColor = "orange";
console.log(listItem.style.backgroundColor);

listItem.attributeStyleMap.set("font-size", "4rem");
console.log(listItem.attributeStyleMap.get("font-size").value);
console.log(listItem.attributeStyleMap.get("font-size").unit);
console.log(listItem.attributeStyleMap.get("background-color"));
