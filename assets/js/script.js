const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement= document.getElementById('answer-buttons');
var timerElement = document.getElementById('timer');
let timeLeft = 90;
let shuffledQuestions, currentQuestionIndex //default both of these values to undefined

function endGame() {
  console.log('this worked');
  questionContainerElement.classList.add('hide');
  initialsInput.classList.remove('hide');
};

function timer() {
  const timer = setInterval(function() { 
    timeLeft = timeLeft - 1;
    if (timeLeft > 0) {
      timerElement.textContent = "Seconds left: " + timeLeft;
      timeLeft--;
    }
      
    else { 
      timerElement.textContent = "";
      clearInterval(timer); // stops timer 
      endGame();
    }
  }, 1000);
}

function startGame() {
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

function resetState() { //reset everything to default
  while (answerButtonsElement.firstChild) { //removing child elements in answer buttons element
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function setNextQuestion() {
  resetState() //reset everything to default state, make questions black again
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
    answerButtonsElement.appendChild(button)
  })
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => { //converting to array
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    showNextQuestion()
  } else{
    showNextQuestion() 
  }
}


function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
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