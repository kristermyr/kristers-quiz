var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("questions-container");
const questionElement = document.getElementById("question");
const answerBtnsElement = document.getElementById("answer-buttons");
var quizOver = document.getElementById("quizOver");
var submitScore = document.getElementById("submit");
var highScores = document.getElementById("highScores");
var highScoreBtn = document.getElementById("highScoreBtn");
var score;
var timerInterval 
var timerElement = document.querySelector("#timer-count");
var correctAnswer1 = document.getElementById("correct-btn1");
var correctAnswer2 = document.getElementById("correct-btn2");
var correctAnswer3 = document.getElementById("correct-btn3");
var correctAnswer4 = document.getElementById("correct-btn4");
var correctAnswer5 = document.getElementById("correct-btn5");
var correctAnswer6 = document.getElementById("correct-btn6");
var correctAnswer7 = document.getElementById("correct-btn7");
var correctAnswer8 = document.getElementById("correct-btn8");
var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var question4 = document.getElementById("question4");
var question5 = document.getElementById("question5");
var question6 = document.getElementById("question6");
var question7 = document.getElementById("question7");
var question8 = document.getElementById("question8");
var wrongButtons = document.querySelectorAll(".wrong-btn");
var wrongButtons2 = document.querySelectorAll(".wrong-btn2");
var wrongButtons3 = document.querySelectorAll(".wrong-btn3");
var wrongButtons4 = document.querySelectorAll(".wrong-btn4");
var wrongButtons5 = document.querySelectorAll(".wrong-btn5");
var wrongButtons6 = document.querySelectorAll(".wrong-btn6");
var wrongButtons7 = document.querySelectorAll(".wrong-btn7");
var wrongButtons8 = document.querySelectorAll(".wrong-btn8");


submitScore.addEventListener("click", function() {    
    submit();
});
function submit() {

    highScores.classList.remove("hide")

}

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
wrongButtons3.forEach((btn) => {
    return btn.addEventListener("click", (event) => {
        wrongBtn3();
    });
})
wrongButtons4.forEach((btn) => {
    return btn.addEventListener("click", (event) => {
        wrongBtn4();
    });
})
wrongButtons5.forEach((btn) => {
    return btn.addEventListener("click", (event) => {
        wrongBtn5();
    });
})
wrongButtons6.forEach((btn) => {
    return btn.addEventListener("click", (event) => {
        wrongBtn6();
    });
})
wrongButtons7.forEach((btn) => {
    return btn.addEventListener("click", (event) => {
        wrongBtn7();
    });
})
wrongButtons8.forEach((btn) => {
    return btn.addEventListener("click", (event) => {
        wrongBtn8();
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

correctAnswer1.addEventListener("click", function() {    //correct answer button  
    correctBtn1();
});
correctAnswer2.addEventListener("click", function() {    //correct answer button  
    correctBtn2();
});
correctAnswer3.addEventListener("click", function() {    //correct answer button  
    correctBtn3();
});
correctAnswer4.addEventListener("click", function() {    //correct answer button  
    correctBtn4();
});
correctAnswer5.addEventListener("click", function() {    //correct answer button  
    correctBtn5();
});
correctAnswer6.addEventListener("click", function() {    //correct answer button  
    correctBtn6();
});
correctAnswer7.addEventListener("click", function() {    //correct answer button  
    correctBtn7();
});
correctAnswer8.addEventListener("click", function() {    //correct answer button  
    correctBtn8();
});

function correctBtn1 (){                  //correct answer function
    
    question1.classList.add("hide")
    question2.classList.remove("hide")
    secondsLeft = secondsLeft + 10;
    console.log("button1");
}   
function correctBtn2 (){                  //correct answer function
    
    question2.classList.add("hide")
    question3.classList.remove("hide")
    secondsLeft = secondsLeft + 10;
    console.log("button2");
}  
function correctBtn3 (){                  //correct answer function
    
    question3.classList.add("hide")
    question4.classList.remove("hide")
    secondsLeft = secondsLeft + 10;
    console.log("button3");
}  
function correctBtn4 (){                  //correct answer function
    
    question4.classList.add("hide")
    question5.classList.remove("hide")
    secondsLeft = secondsLeft + 10;
    console.log("button4");
}
function correctBtn5 (){                  //correct answer function
    
    question5.classList.add("hide")
    question6.classList.remove("hide")
    secondsLeft = secondsLeft + 10;
    console.log("button5");
}
function correctBtn6 (){                  //correct answer function
    
    question6.classList.add("hide")
    question7.classList.remove("hide")
    secondsLeft = secondsLeft + 10;
    console.log("button6");
}
function correctBtn7 (){                  //correct answer function
    
    question7.classList.add("hide")
    question8.classList.remove("hide")
    secondsLeft = secondsLeft + 10;
    console.log("button7");
}
function correctBtn8 (){                  //correct answer function
    
    question8.classList.add("hide")
    quizOver.classList.remove("hide")
    secondsLeft = secondsLeft + 10;
    clearInterval(timerInterval);
    console.log("button8");
    
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
        
    }

function wrongBtn3() {
    
    question3.classList.add("hide")
    question4.classList.remove("hide")
    secondsLeft = secondsLeft - 10;
    
        }
function wrongBtn4() {
    
question4.classList.add("hide")
question5.classList.remove("hide")
secondsLeft = secondsLeft - 10;
 }
 function wrongBtn5() {
    
    question5.classList.add("hide")
    question6.classList.remove("hide")
    secondsLeft = secondsLeft - 10;
     }
function wrongBtn6() {
    
    question6.classList.add("hide")
    question7.classList.remove("hide")
    secondsLeft = secondsLeft - 10;
     }

function wrongBtn7() {
    
    question7.classList.add("hide")
    question8.classList.remove("hide")
    secondsLeft = secondsLeft - 10;
    }
function wrongBtn8() {
    
    question8.classList.add("hide")
    quizOver.classList.remove("hide")
    secondsLeft = secondsLeft - 10;
    clearInterval(timerInterval);
   
}

var scoreResult = [];

function startTimer() {             //timer function
    timerInterval = setInterval(function(){
    secondsLeft --;
    timerElement.textContent = secondsLeft;
    document.getElementById("score").innerHTML = secondsLeft;
    if (secondsLeft === 0) {
        clearInterval(timerInterval);
    if (secondsLeft === 0) {
        alert("Time's up!");
    }
   
    }
}, 1000);

}
