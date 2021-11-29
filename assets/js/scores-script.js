var highScoresButton = document.querySelector("#highscores-button");
var doneButton = document.querySelector("#done-button");
var initialsInput = document.querySelector("#initials-input");


doneButton.addEventListener('click', function(event) {
  event.preventDefault();
});

//saves initials to localStorage
function saveInitials() {
  localStorage.setItem("initials", 1)
};

//gets initals from localStorage at a given key 
var player = { userInitials:initalsInput.value.trim() };

localStorage.setItem("player", JSON.stringify(player));

// document.getElementById('intials-input').innerHTML = 'initials';
// console.log('this is my localstorage value');

// function endGame() {
//   questionContainerElement.classList.add('hide');
//   scoresContainerElement.classList.remove('hide');
// };