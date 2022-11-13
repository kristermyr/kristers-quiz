var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("questions-container");
const questionElement = document.getElementById("question")
const answerBtnsElement = document.getElementById("answer-buttons")
var timerElement = document.querySelector("#timer-count");
var correctAnswer = document.getElementbyId("correct-btn");
startButton.addEventListener("click", function() {
    startGame();
    startTimer();
});
correctAnswer.addEventListener("click", function) {
    correctBtn();
}

var secondsLeft = 5;
var display =0;

  function startGame(){
    console.log("start game");
    startButton.classList.add("hide")
    questionContainerElement.classList.remove("hide")
  }
function correctBtn (){
    console.log("button works")
}
   


function startTimer() {             //timer function
    var timerInterval = setInterval(function(){
    secondsLeft --;
    timerElement.textContent = secondsLeft;

    if (secondsLeft === 0) {
        clearInterval(timerInterval);
    }
}, 1000);
    
}
