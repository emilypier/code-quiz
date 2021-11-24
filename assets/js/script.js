var startButtonEl = document.querySelector("#start-quiz");
var questionDisplayEl = document.querySelector("#question") //where question will be displayed
//the options
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
//questions
var questions = [
  {
    id: 0,
    question: "Commonly used data types DO not include:",
    answers: [
      { text: "strings", isCorrect: false},
      { text: "booleans", isCorrect: false},
      { text: "alerts", isCorrect: true},
      { text: "numbers", isCorrect: false }
    ]
  },

  {
    id: 1,
    q: "The condition in an if / else statement is enclosed with _____.",
    a: [
      { text: "quotes", isCorrect: false},
      { text: "curly brackets", isCorrect: false},
      { text: "parenthesis", isCorrect: true},
      { text: "square brackets", isCorrect: false},
    ]
  },

  {
    id: 2,
    q: "Arrays in JavaScript can be used to store _____.",
    a: [
      { text: "numbers and strings", isCorrect: false},
      { text: "other arrays", isCorrect: false},
      { text: "booleans", isCorrect: false},
      { text: "all of the above", isCorrect: true}
    ]
  },

  { 
    id: 3,
    q: "String values must be enclosed within _____. when being assigned to variables.",
    a: [
      { text: "commas", isCorrect: false},
      { text: "curly brackets", isCorrect: false},
      { text: "quotes", isCorrect: true},
      { text: "parenthesis", isCorrect: false}
    ]
  },
  
  { 
    id: 4,
    q: "A very useful tool used during development and debugging for printing content to the debugger is:",
    a: [
      { text: "JavaScript", isCorrect: false},
      { text: "terminal/bash", isCorrect: false},
      { text: "for loops", isCorrect: false},
      { text: "console.log", isCorrect: true}
    ],
  }
];

// TIMER
function countdown() {
  var timerLeft = 5;

  var timeInterval = setInterval(function() {
    if (timerLeft > 1) {
      timerEl.textContent = timerLeft + "seconds remaining";
      timerLeft--;
    }
      else if (timerLeft === 1) {
      timerEl.textContent = (timerLeft) + "second remaining";
      timerLeft--;
      }
      else { 
        timerEl.textContent = "";
        clearInterval(timeInterval); //clearInterval reference function timeInterval to clear. stops timer
        console.log("timer worked ii guess")
        // document.getElementById("timer").innerHTML;
      }
  }, 1000);
}   

//starts quiz
startButtonEl.addEventListener("click", startQuiz)

function startQuiz() {

}

{ 
  //to get the question
  var question = document.getElementById("question");
  //to display the question
  questionDisplayEl.textContent = "here is the question:" + questions;


  option1.innerText
});


