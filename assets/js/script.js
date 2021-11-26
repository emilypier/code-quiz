var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionContainerEl = document.getElementById('question-container');
var questionEl = document.getElementById('question')
var answerButtonsEl= document.getElementById('answer-buttons')
var shuffledQuestions, currentQuestionIndex //default both of these values to undefined

startButton.addEventListener('click', startGame);

function startGame() {
  startButton.classList.add('hide'); //hide start button
  shuffledQuestions = questions.sort(() => Math.random() - .5) //shuffles all questions
  currentQuestionIndex = 0
  questionContainerEl.classList.remove('hide'); //unhides question container
  setNextQuestion(); 
}

function setNextQuestion() {
  resetState() //reset everything to default state

  }
  showQuestion(shuffledQuestions[currentQuestionIndex]) //shows question
}

function showQuestion(question) { //question object 
  questionElement.innerText = question.question
  questions.answers.forEach(asnwers => {
    var button = document.createElement('button')
    button.innerText = answer.textbutton.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)

  })
}

function resetState() { //reset everything to default
  nextbutton.classList.add('hide');
  while (answerButtonsEl.firstChild) {
    answerButtonsEl.removeChild
    answerButtonsEl.firstChild);
  }
}

function selectanswer(e) {

}

//quiz questions
var questions = [
  {
    question: "Commonly used data types DO not include:",
    options: [
      { text: "strings", correct: false },
      { text: "booleans", correct: false },
      { text: "alerts", correct: true },
      { text: "numbers", correct: false }
    ]
  },

  {  
    question: "The condition in an if / else statement is enclosed with _____.",
    options: [
      { text: "quotes", correct: false },
      { text: "curly brackets", correct: false },
      { text: "parenthesis", correct: true },
      { text: "square brackets", correct: false }
    ]
  },
  
  {
    question: "Arrays in JavaScript can be used to store _____.",
    options: [
      { text: "numbers and strings", correct: false},
      { text: "other arrays", correct: false },
      { text: "booleans", correct: false },
      { text: "all of the above", correct: true }
    ]
  },

  {
    question: "String values must be enclosed within _____. when being assigned to variables.",
    options: [
      { text: "commas", correct: false },
      { text: "curly brackets", correct: false },
      { text: "quotes", correct: true },
      { text: "parenthesis", correct: false }
    ]
  },

  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      { text: "JavaScript", correct: false },
      { text: "terminal/bash", correct: false },
      { text: "for loops", correct: false },
      { text: "console.log", correct: true }
    ]
  }
];
