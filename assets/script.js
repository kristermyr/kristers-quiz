var timerElement = document.querySelector("#timer-count");
var startButton = document.querySelector("#start-button");
var questions = document.querySelector("#questionsContainer");
//var answers = document.querySelector(".questions-container");
var answer1 = document.querySelector(".answer1");
var secondsLeft = 5;
var questionBank = ["question 1", "question 2", "question 3", "question 4", "question 5", "question 6", "question 7", "question 8", "question 9", "question 10"];
var answersBank = ["answer 1", "answer 2", "answer 3",]
var display =0;

// Start the timer


/*function startGame() {
   questions.textcontent = questionBank [i =0];
answers.textcontent = answersBank
  }*/

function startGame(){
    startButton.setAttribute("style", "display: none");
    questions.setAttribute("style", "display: block");
    console.log("start game");
}  

function selectAnswer(){

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







startButton.addEventListener("click", function() {
    startGame();
    startTimer();
    
   


   
});
   


