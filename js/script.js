const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

// a <p> with red text that says “Hey I’m red!”
const redPara = document.createElement("p");
redPara.style.color = "red";
redPara.textContent = "Hey I'm red!";

// an <h3> with blue text that says “I’m a blue h3!”
const blueHead3 = document.createElement("h3");
blueHead3.style.color = "blue";
blueHead3.textContent = "I'm a blue h3!";

// a <div> with a black border and pink background color with the following elements inside of it:
const blackAndPink = document.createElement("div");
blackAndPink.style.cssText = "border: black; background-color: pink";

const headImDiv = document.createElement("h1");
headImDiv.textContent = "I'm in a div";

const paraMeToo = document.createElement("p");
paraMeToo.textContent = "ME TOO!";

blackAndPink.appendChild(headImDiv);
blackAndPink.appendChild(paraMeToo);

container.appendChild(content);
content.appendChild(redPara);
content.appendChild(blueHead3);
container.appendChild(blackAndPink);

//Button alert
const btnAlso = document.querySelector("#btnAlso");
btnAlso.onclick = () => alert("Hello World");

//Another alert type
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});

// METHOD 1
function alertFunction() {
  alert("YAY! YOU DID IT!");
}

// METHOD 2
// btn.onclick = alertFunction;
const clickMe = document.querySelector("#clickMe");
// METHOD 3
clickMe.addEventListener("click", alertFunction);

// btn.addEventListener('click', function (e) {
//   console.log(e);
// });

// btn.addEventListener('click', function (e) {
//   console.log(e.target);
// });

// btn.addEventListener('click', function (e) {
//   e.target.style.background = 'blue';
// });

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
