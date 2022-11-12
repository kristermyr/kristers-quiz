var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("questions-container");
const questionElement = document.getElementById("question")
const answerBtnsElement = document.getElementById("answer-buttons")
var timerElement = document.querySelector("#timer-count");
var shuffledQuestions, currentQuestionIndex
startButton.addEventListener("click", function() {
    startGame();
    startTimer();
});


//var answers = document.querySelector(".questions-container");
var secondsLeft = 5;
var display =0;

// Start the timer


/*function startGame() {
   questions.textcontent = questionBank [i =0];
answers.textcontent = answersBank
  }*/

  function startGame(){
    console.log("start game");
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion();
   
}  



const questions = [
    { question: "What is the capital of France?",
      answers: [
        {text: "Paris", correct: true},
        {text: "London", correct: false},
    ] 
    }
    ]

function selectAnswer(){

}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
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





