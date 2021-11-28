var highScoresButton = document.querySelector("#scores-container");
var initialsInput = document.querySelector("#initials");
var doneButton = document.querySelector("#done");


//pulls up scores when "View High Scores" is clicked
highScoresButton.addEventListener('click', endGame());


// saving initials to localStorage
const saveIntials = function() {
  localStorage.setItem("initials", 1)
};

// getting initals from localStorage at a given key
localStorage.getItem('initials');
console.log('this is my localstorage val', localStorageVal);