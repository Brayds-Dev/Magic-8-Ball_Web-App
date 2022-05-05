"use strict";

// Create an array with a selection of answers in the form of strings
const answers = [
  "It is certain.",
  "Without a doubt.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Signs point to yes.",
  "Ask again later.",
  "Better not tell you now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My Sources say no.",
  "Very doubtful.",
];

// Grab two DOM elements and set them to variables to be used later
const question = document.querySelector(".question");
const output = document.querySelector(".instruction");

//Create a new variable and assign a string character to it -- this will be used later boolean expression
let modeToggle = "x";

// Create a function that will return a random answer from the array by use of DOM manipulation if input hs been filled
// If input has not been filled will ask user to type a question by DOM manipulation
let displayMessage = () => {
  if (question.value.length > 0) {
    let answer = answers[Math.floor(Math.random() * answers.length)];
    output.textContent = answer;
    question.value = "";
  } else {
    output.textContent = "Please type a question";
  }
};

// A function to display a new message to the user and wipe the input field clean using DOM manipulation
let resetMessage = () => {
  output.textContent = "Please try another question";
  question.value = "";
};

// A function to change the documents body css style by toggling a new class
function toggleDark() {
  let darkMode = document.body;
  darkMode.classList.toggle("dark-mode");
}

// A function to store an image element into a variable and swap it out with another source if a condition is met
function changeIcon() {
  let mode = document.querySelector(".dark-toggle img");
  if (modeToggle == "x") {
    mode.src = "img/sun.png";
    modeToggle = "y";
  } else {
    mode.src = "img/night-mode.png";
    modeToggle = "x";
  }
}

// Add a click event listner to the darkmode img and if clicked carry out two functions defined earlier
document.querySelector(".dark-toggle").addEventListener("click", () => {
  toggleDark();
  changeIcon();
});

// Add a click event listener to the 8 ball img and if clicked carry out a function defined earlier
document.querySelector(".magic-ball").addEventListener("click", displayMessage);

// Add a click event listner to the button element and if clicked carry out a function defined earlier
document.querySelector(".again").addEventListener("click", resetMessage);

// an if statement that will set the initial value of the answer by DOM manipulation.
if (!question.value) {
  output.textContent = "Ask your question then click the magic ball";
}
