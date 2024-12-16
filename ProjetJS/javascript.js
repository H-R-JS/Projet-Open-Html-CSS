/// Form function

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const userValue = document.querySelector("#username").value;
  document.querySelector("#output").textContent = `Bonjour ${userValue} !`;
});

// Events
const form = document.querySelector("form");

function over() {
  form.style.backgroundColor = "yellow";
}

function out() {
  form.style.backgroundColor = "";
}

form.addEventListener("mouseover", over);

form.addEventListener("mouseout", out);

document.querySelector("#output").addEventListener("click", function () {
  alert("lolol");
});

// span test

const spans = document.querySelectorAll(".span-test");
console.log(spans);
function overSpan(e) {
  e.target.style.backgroundColor = "red";
}

function outSpan(e) {
  e.target.style.backgroundColor = "black";
}
spans.forEach((span) => {
  span.addEventListener("mouseover", overSpan);
  span.addEventListener("mouseout", outSpan);
});

const btn = document.querySelector("#btn-add");

function addLi() {
  const creaLi = document.createElement("li");
  document.querySelector("ul").appendChild(creaLi);
}

btn.addEventListener("click", addLi);
