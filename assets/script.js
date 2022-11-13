var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("questions-container");
var timerElement = document.querySelector("#timer-count");
var correctAnswer = document.getElementById("correct-btn");
var wrongAnswer = document.querySelector(".wrong-btn");
startButton.addEventListener("click", function() {
    startGame();
    startTimer();
});


var secondsLeft = 5;
var display =0;

  function startGame(){
    console.log("start game");
    startButton.classList.add("hide")
    questionContainerElement.classList.remove("hide")
       
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
