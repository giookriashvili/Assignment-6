// N1

const modal = document.getElementById("modal");
const btn = document.getElementById("modalBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
  document.body.style.backgroundColor = "black";
};
span.onclick = function () {
  modal.style.display = "none";
  document.body.style.backgroundColor = "white";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.backgroundColor = "white";
  }
};

// N2

const button = document.getElementById("colorBtn");

button.addEventListener("click", () => {
  const color = document.getElementById("colorInput").value;
  if (
    color === "red" ||
    color === "blue" ||
    color === "green" ||
    color === "black" ||
    color === "white"
  ) {
    document.body.style.backgroundColor = color;
  } else {
    alert("Choose one of these colors: red, blue, green, black, white.");
  }
});

// N3
const sumBtn = document.getElementById("sumBtn");
function calculateSum() {
  const input = document.getElementById("numberInput").value;
  const numbers = input.split(":").map(Number);
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const average = sum / numbers.length;
  document.getElementById("result").textContent = `Average: ${average}`;
}

sumBtn.addEventListener("click", calculateSum);
