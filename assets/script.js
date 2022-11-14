var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("questions-container");
const questionElement = document.getElementById("question")
const answerBtnsElement = document.getElementById("answer-buttons")
var timerElement = document.querySelector("#timer-count");
var correctAnswer = document.getElementById("correct-btn");
var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var wrongButtons = document.querySelectorAll(".wrong-btn");
var wrongButtons2 = document.querySelectorAll(".wrong-btn2");



wrongButtons.forEach((btn) => {
    return btn.addEventListener("click", (event) => {
        wrongBtn();
    });
})
wrongButtons2.forEach((btn) => {
    return btn.addEventListener("click", (event) => {
        wrongBtn2();
    });
})

startButton.addEventListener("click", function() {
    startGame();
    startTimer();
});


var secondsLeft = 90;
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
correctAnswer.addEventListener("click", function() {    //correct answer button
    
    correctBtn();   
});

function correctBtn (){                  //correct answer function
    
    question1.classList.add("hide")
    question2.classList.remove("hide")
    console.log ("correct button")
    secondsLeft = secondsLeft + 10;
}   

function wrongBtn() {

    question1.classList.add("hide")
    question2.classList.remove("hide")
    secondsLeft = secondsLeft - 10;
}
function wrongBtn2() {
    
    question2.classList.add("hide")
    question3.classList.remove("hide")
        secondsLeft = secondsLeft - 10;
        console.log ("wrong button 2");

    }

function nextQuestion(){

}
