var startButton = document.querySelector("#start-btn");
var questionContainerElement = document.querySelector("#question-container");
var questionElement = document.querySelector("#question");
var answerButtonsElement = document.querySelector("#answer-buttons");
var scoresContainerElement = document.querySelector("#scores-container");
var timerElement = document.getElementById("timer");
var timeLeft = 75;
var timer;
var currentQuestionIndex = 0;
var highScoresButton = document.querySelector("#highscores-button");
var doneButton = document.querySelector("#done-button");

//quiz questions
var questions = [
  {
    question: "Commonly used data types DO not include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "booleans",
  },

  {
    question: "The condition in an if / else statement is enclosed with _____.",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: "parenthesis",
  },

  {
    question: "Arrays in JavaScript can be used to store _____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },

  {
    question:
      "String values must be enclosed within _____. when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes",
  },

  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

function startGame() {
  scoresContainerElement.classList.add("hide");
  startButton.classList.add("hide"); //hide start button
  timer();
  questionContainerElement.classList.remove("hide"); //unhides question container
  showQuestion();
}

function timer() {
  timer = setInterval(function () {
    timeLeft = timeLeft - 0.0; //changed to .0 because 1 made it count down by 2 secs
    if (timeLeft > 0) {
      timerElement.textContent = "Time: " + timeLeft;
      timeLeft--;
    } else {
      timerElement.textContent = "Time's up!";

      endGame();
    }
  }, 1000);
};

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
};

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
};

function endGame() {
  questionContainerElement.classList.add("hide");
  scoresContainerElement.classList.remove("hide");
  timerElement.classList.add("hide");
  clearInterval(timer); // stops timer
  
};

//setItem(key, value). save initials to localStorage
function saveInitials() {
  scoresContainerElement.setAttribute('class', "hide");
  document.getElementById('scoresList').classList.remove("hide");
  var initialsInput = document.querySelector("#initials").value;

  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  var newScore = {
    initials: initialsInput,
    score: timeLeft,
  };
  console.log(timeLeft);

  highscores.push(newScore);

  window.localStorage.setItem("highscores", JSON.stringify(highscores));
  loadScores()
};

//dynamically make score table & load initials and scores
function loadScores() {
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  //sort highest to lowest
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  var scoresTable = document.getElementById("scoresTable");

  highscores.forEach(function (score) {
    var playerRow = document.createElement("li");

    playerRow.textContent = score.initials + ' : ' + score.score;
    
    scoresTable.append(playerRow);
  });
};

startButton.addEventListener("click", startGame);
doneButton.addEventListener("click", saveInitials);
document.getElementById('playAgain').addEventListener('click', function(){
  window.location.reload(); //reloading page to restart quiz
});

// hiding elements when highscores button is displayed
highScoresButton.addEventListener('click', function (){
  document.getElementById('scoresList').classList.remove("hide");
  startButton.classList.add("hide");
  questionContainerElement.classList.add("hide");
  scoresContainerElement.classList.add("hide");
  timerElement.classList.add("hide");
  clearInterval(timer); // stops timer
  loadScores()
});