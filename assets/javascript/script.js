var timeLeftEl = document.querySelector('#time-left');
var startQuizEl = document.querySelector('#start-quiz');
var startBtnEl = document.querySelector('#start-button');
var questionsBoxEl = document.querySelector('#questions-box');

var currentIndex = 0;
var timeLeft = 10;
var intervalId;

// var questionTextEl = document.querySelector("#question-text")
// var optOneEl = document.querySelector("#opt1");
// var optTwoEl = document.querySelector("#opt2");
// var optThreeEl = document.querySelector("#opt3");
// var optFourEl = document.querySelector("#opt4");

var questions = [
    {
        title: 'Where is the Eiffel Tower located?',
        choices: ['London', 'Paris', 'Buenos Aires', 'Los Angeles'],
        correctAnswer: 'Paris',
    },
    {
        title: 'Question 2',
        choices: ['1', '2', '3', '4'],
        correctAnswer: '1',
    },
    {
        title: 'Who won the 2022 FIFA World Cup?',
        choices: ['Argentina', 'France', 'Brasil', 'Spain'],
        correctAnswer: 'Argentina',
    },
    {
        title: 'Seven Wonders',
        choices: ['1', '2', '3', '4'],
        correctAnswer: '4',
    },
    {
        title: 'Question 5',
        choices: ['1', '2', '3', '4'],
        correctAnswer: '3',
    },
];

//start Quiz button
startBtnEl.addEventListener('click', startQuiz);

// optOneEl.addEventListener("click", nextQuestion)
// optTwoEl.addEventListener("click", nextQuestion)
// optThreeEl.addEventListener("click", nextQuestion)
// optFourEl.addEventListener("click", nextQuestion)

function startQuiz() {
    startTimer();
    startQuizEl.style.display = "none";
    questionsBoxEl.style.display = "block";
    showQuestions();
}

function startTimer() {
    intervalId = setInterval(function () {
        timeLeftEl.textContent = timeLeft + ' seconds left';
        timeLeft--;
    }, 1000);
}

function showQuestions() {
    var h2El = document.createElement('h2');
    h2El.textContent = questions[currentIndex].title;
    questionsBoxEl.appendChild(h2El);

    for (var i = 0; i < questions[currentIndex].choices.length; i++) {
        var choiceButtonEl = document.createElement('button');
        choiceButtonEl.textContent = questions[currentIndex].choices[i];
        questionsBoxEl.appendChild(choiceButtonEl);
    }

    //make a button for the questions that has a text contexct of alerts and you can compare to the answers (the question[O].answer)
    //use the event object on them: event.target.textContent that's how you'll know which one they clicked
    //event listener on the box the questions are going in -- event propagation
}

questionsBoxEl.addEventListener('click', nextQuestion());

function nextQuestion(event) {
    var correctAnswer = questions[currentIndex].correctAnswer;
    var userChoice = event.target.textContent;
    console.log(correctAnswer + " vs. " + userChoice)

    if (correctAnswer === userChoice) {
        console.log('yayyy')
    } else {
        console.log('nope');
    }

    currentIndex++;
    showQuestions();
}

// function handleUserChoice (event) {
//     if (event.target.matches('button')) {

//     }
// }

//     // checking of answer
//     var correctAnswer = questions[currentIndex].correctAnswer;
//     var userChoice = event.target.textContent;

//     console.log(correctAnswer + " vs. " + userChoice)

//     if(correctAnswer == userChoice) {
//         console.log("Correct!")
//     } else {
//         console.log("Wrong!")
//         timeLeft = timeLeft - 15;
//     }


//     // move on to next question
//     currentIndex++;
//     showQuestions()

// }






//end page where you can save your initials 
//leaderboard saved in local storage
//href for Highest scores
