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
container.style.background = "black";

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgb =
    "rgb(" + r.toString() + "," + g.toString() + "," + b.toString() + ")";
  return rgb;
}

function createGrid(n) {
  if (n > 100) {
    return "ERROR";
  } else {
    container.replaceChildren();
    for (let i = 0; i < n * n; i++) {
      const div = document.createElement("div");
      div.style.boxSizing = "border-box";
      div.style.border = "1px solid black";
      div.style.aspectRatio = "1 / 1";
      div.style.width = `calc(100% / ${n})`;
      div.style.height = `calc(100% / ${n})`;
      div.style.background = "white";
      div.style.opacity = 1;
      div.addEventListener("mouseover", () => {
        div.style.background = randomColor();
        div.style.opacity = Math.max(0, parseFloat(div.style.opacity) - 0.1);
      });
      container.appendChild(div);
    }
  }
}

var button = document.querySelector("#btn_new");

button.addEventListener("click", () => {
  let n = prompt("New grid size?");
  createGrid(n);
});

createGrid(16);
