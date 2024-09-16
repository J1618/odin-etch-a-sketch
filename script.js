var container = document.querySelector("#container");
container.style.border = "none";
container.style.padding = "0";
container.style.boxSizing = "border-box";
container.style.margin = "auto";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.alignContent = "center";
container.style.justifyContent = "center";
container.style.width = "90vh";

for (let i = 0; i < 16 * 16; i++) {
  const div = document.createElement("div");
  div.style.boxSizing = "border-box";
  div.style.border = "1px solid black";
  div.style.aspectRatio = "1 / 1";
  div.style.width = "min(6.25%, calc(100vh/16))";
  container.appendChild(div);
}
