const startButton = document.querySelector("#start-btn");
const questionContainerElement = document.querySelector("#question-container");
const questionElement = document.querySelector("#question");
const answerButtonsElement = document.querySelector("#answer-buttons");
const scoresContainerElement = document.querySelector("#scores-container");
var timerElement = document.getElementById("timer");
let timeLeft = 75;
let shuffledQuestions;
var currentQuestionIndex = 0; //default both of these values to undefined

//quiz questions
const questions = [
  {
    question: "Commonly used data types DO not include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "booleans",
  },

  // {
  //   question: "The condition in an if / else statement is enclosed with _____.",
  //   answers: [
  //     { text: "quotes", correct: false },
  //     { text: "curly brackets", correct: false },
  //     { text: "parenthesis", correct: true },
  //     { text: "square brackets", correct: false },
  //   ],
  // },

  // {
  //   question: "Arrays in JavaScript can be used to store _____.",
  //   answers: [
  //     { text: "numbers and strings", correct: false },
  //     { text: "other arrays", correct: false },
  //     { text: "booleans", correct: false },
  //     { text: "all of the above", correct: true },
  //   ],
  // },

  // {
  //   question:
  //     "String values must be enclosed within _____. when being assigned to variables.",
  //   answers: [
  //     { text: "commas", correct: false },
  //     { text: "curly brackets", correct: false },
  //     { text: "quotes", correct: true },
  //     { text: "parenthesis", correct: false },
  //   ],
  // },

  // {
  //   question:
  //     "A very useful tool used during development and debugging for printing content to the debugger is:",
  //   answers: [
  //     { text: "JavaScript", correct: false },
  //     { text: "terminal/bash", correct: false },
  //     { text: "for loops", correct: false },
  //     { text: "console.log", correct: true },
  //   ],
  // },
];

function endGame() {
  questionContainerElement.classList.add("hide");
  scoresContainerElement.classList.remove("hide");
  timerElement.classList.add("hide");
  clearInterval(timer); // stops timer
  //.log(timeLeft);
}

function timer() {
  const timer = setInterval(function () {
    timeLeft = timeLeft - 0.0; //changed to .0 because 1 made it count down by 2 secs
    if (timeLeft > 0) {
      timerElement.textContent = "Time: " + timeLeft;
      timeLeft--;
    } else {
      timerElement.textContent = "Time's up!";

      endGame();
    }
  }, 1000);
}

function startGame() {
  scoresContainerElement.classList.add("hide");
  startButton.classList.add("hide"); //hide start button
  timer();
  //shuffledQuestions = questions.sort(() => Math.random() - .5) //shuffles all questions
  //starting on first question in shuffled uestions array.
  questionContainerElement.classList.remove("hide"); //unhides question container
  showQuestion();
}

startButton.addEventListener("click", startGame);

function showQuestion() {
  //question object refers to questions array below
  questionElement.textContent = questions[currentQuestionIndex].question; //pointing to question array, then nested question array
  answerButtonsElement.innerHTML = "";
  questions[currentQuestionIndex].choices.forEach((answer) => {
    //bringing answers to buttons on page
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("btn");
    button.setAttribute("value", answer);

    button.addEventListener("click", selectAnswer);

    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer() {
  const selectedButton = this.value;

  if (selectedButton !== questions[currentQuestionIndex].answer) {
    timeLeft -= 5;

    timerElement.textContent = timeLeft;
  } else {
    // questionElement.classList.add('correct')
  }

  currentQuestionIndex++;

  if (currentQuestionIndex === questions.length) {
    endGame();
  } else {
    showQuestion();
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
  } else {
    questionElement.classList.add("wrong");
    //deduct 10 seconds from score
  }
}

function clearStatusClass(element) {
  questionElement.classList.remove("correct");
  questionElement.classList.remove("wrong");
}

var highScoresButton = document.querySelector("#highscores-button");
var doneButton = document.querySelector("#done-button");


//setItem(key, value). save initials to localStorage
function saveInitials() {
  var initialsInput = document.querySelector("#initials").value;

  // var highscores = JSON.parse(localStorage.getItem('highscores')) || [];

  // var newScore = {
  //   initials: initialsInput,
  //   score: timeLeft
  // };
  console.log(timeLeft)

  // highscores.push(newScore)

  // localStorage.setItem("highscores", highscores);
}

doneButton.addEventListener("click", saveInitials);
//getItem(key)

//removeItem(key)

//key(index)

// function endGame() {
//   questionContainerElement.classList.add('hide');
//   scoresContainerElement.classList.remove('hide');
// };
