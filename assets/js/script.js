const startButton = document.querySelector('#start-btn');
const questionContainerElement = document.querySelector('#question-container');
const questionElement = document.querySelector('#question');
const answerButtonsElement= document.querySelector('#answer-buttons');
const scoresContainerElement = document.querySelector('#scores-container');
var timerElement = document.getElementById('timer');
let timeLeft = 30;
let shuffledQuestions, currentQuestionIndex //default both of these values to undefined

function endGame() {
  questionContainerElement.classList.add('hide');
  scoresContainerElement.classList.remove('hide');
  timerElement.classList.add('hide');
};

function timer() {
  const timer = setInterval(function() { 
    timeLeft = timeLeft - .0; //changed to .0 because 1 made it count down by 2 secs
    if (timeLeft > 0) {
      timerElement.textContent = "Time: " + timeLeft;
      timeLeft--
    }
      
    else { 
      timerElement.textContent = "Time's up!";
      clearInterval(timer); // stops timer 
      endGame();
    }
  }, 1000);
};

function startGame() {
  scoresContainerElement.classList.add("hide");
  startButton.classList.add('hide'); //hide start button
  timer();
  shuffledQuestions = questions.sort(() => Math.random() - .5) //shuffles all questions
  currentQuestionIndex = 0 //starting on first question in shuffled uestions array.
  questionContainerElement.classList.remove('hide'); //unhides question container
  setNextQuestion(); 
}

startButton.addEventListener('click', startGame);

function showNextQuestion() {
  currentQuestionIndex++
  setNextQuestion()

  if (currentQuestionIndex === 0) {
    endGame();
  }
}

function resetState() {
  while (answerButtonsElement.firstChild) { //removing children in answer buttons el. removes placeholder buttons
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function setNextQuestion() {
  resetState() 
  showQuestion(shuffledQuestions[currentQuestionIndex])
};

function showQuestion(question) { //question object refers to questions array below
  questionElement.innerText = question.question //pointing to question array, then nested question array
  question.answers.forEach(answer => { //bringing answers to buttons on page
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button);
  })
}

function selectAnswer(event) {
  const selectedButton = event.target
  const correct = selectedButton.dataset.correct //checks if selected answer is correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => { //converting to array
    setStatusClass(button, button.dataset.correct);
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    showNextQuestion() 
  }
  else {
    showNextQuestion() 
  }
}


function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    questionElement.classList.add('correct')
  } else {
    questionElement.classList.add('wrong')
    //deduct 10 seconds from score

  }
}

function clearStatusClass(element) {
  questionElement.classList.remove('correct')
  questionElement.classList.remove('wrong')
}

//quiz questions
const questions = [
  {
    question: "Commonly used data types DO not include:",
    answers: [
      { text: "strings", correct: false },
      { text: "booleans", correct: false },
      { text: "alerts", correct: true },
      { text: "numbers", correct: false }
    ]
  },

  {  
    question: "The condition in an if / else statement is enclosed with _____.",
    answers: [
      { text: "quotes", correct: false },
      { text: "curly brackets", correct: false },
      { text: "parenthesis", correct: true },
      { text: "square brackets", correct: false }
    ]
  },
  
  {
    question: "Arrays in JavaScript can be used to store _____.",
    answers: [
      { text: "numbers and strings", correct: false},
      { text: "other arrays", correct: false },
      { text: "booleans", correct: false },
      { text: "all of the above", correct: true }
    ]
  },

  {
    question: "String values must be enclosed within _____. when being assigned to variables.",
    answers: [
      { text: "commas", correct: false },
      { text: "curly brackets", correct: false },
      { text: "quotes", correct: true },
      { text: "parenthesis", correct: false }
    ]
  },

  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      { text: "JavaScript", correct: false },
      { text: "terminal/bash", correct: false },
      { text: "for loops", correct: false },
      { text: "console.log", correct: true }
    ]
  }
];