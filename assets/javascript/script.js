var timeLeftEl = document.querySelector('#time-left');
var startQuizEl = document.querySelector('#start-quiz');
var startBtnEl = document.querySelector('#start-button');
var questionsBoxEl = document.querySelector('#questions-box');
var answerInfoEl = document.querySelector('#answer-info');
var summaryEl = document.querySelector('#summary');
summaryEl.style.display = 'none';

var currentIndex = 0;
var timeLeft = 100;
var intervalId;

var questions = [
    {
        title: 'How can a datatype be declared to be a constant type?',
        choices: ['const', 'var', 'let', 'constant'],
        correctAnswer: 'const',
        lastStep: false
    },
    {
        title: 'Which of the following methods can be used to display data in some form using Javascript?',
        choices: ['document.write()', 'console.log()', 'window.alert()', 'All of the above'],
        correctAnswer: 'All of the above',
        lastStep: false
    },
    {
        title: 'Upon encountering empty statements, what does the Javascript Interpreter do??',
        choices: ['Throws an error', 'Ignores the statement', 'Gives a warning', 'Creates a statement'],
        correctAnswer: 'Ignores the statement',
        lastStep: false
    },
    {
        title: 'Which function is used to serialize an object into a JSON string in Javascript?',
        choices: ['parse()', 'convert()', 'stringify()', 'function()'],
        correctAnswer: 'stringify()',
        lastStep: false
    },
    {
        title: 'What does the Javascript “debugger” statement do?',
        choices: ['It will debug all the errors in the program at runtime', 'It acts as a breakpoint in a program', 'It will debug error in the current statement if any', 'None of the above'],
        correctAnswer: 'It acts as a breakpoint in a program',
        lastStep: true
    }
];

//start Quiz button
startBtnEl.addEventListener('click', startQuiz);

//function that starts the quiz
function startQuiz() {
    startTimer();
    startQuizEl.style.display = "none";
    questionsBoxEl.style.display = "inline-block";
    showQuestions();
}

function startTimer() {
    intervalId = setInterval(function () {
        if (timeLeft <= 0) {
            showSummary();
        }
        timeLeftEl.textContent = timeLeft + ' seconds left';
        timeLeft--;
    }, 1000);
}

//function that shows the first question
function showQuestions() {
    var h2El = document.createElement('h2');
    h2El.textContent = questions[currentIndex].title;
    questionsBoxEl.appendChild(h2El);

    //loop to get the questions in order
    for (var i = 0; i < questions[currentIndex].choices.length; i++) {
        var choiceButtonEl = document.createElement('button');
        choiceButtonEl.textContent = questions[currentIndex].choices[i];
        questionsBoxEl.appendChild(choiceButtonEl);
        choiceButtonEl.addEventListener('click', nextQuestion);
    }
}

//function that shows the next question after the user clicked on an answer
function nextQuestion(event) {
    var correctAnswer = questions[currentIndex].correctAnswer;
    //textContent brings whatever the user clicks
    var userChoice = event.target.textContent;

    if (correctAnswer === userChoice) {
        answerInfoEl.textContent = "Correct";
    } else {
        answerInfoEl.textContent = "Wrong";
        timeLeft-= 15;
    }

    //to hide the question displayed before
    questionsBoxEl.replaceChildren();

    //indicates the last question
    if (questions[currentIndex].lastStep) {
        showSummary();
    } else {
        currentIndex++;
        showQuestions();
    }
}

//the results window will appear after the last question was rendered or the clock got to 0
function showSummary() {
    clearInterval(intervalId);
    timeLeftEl.style.display = "none";
    summaryEl.style.display = 'block';
    var finalScore = document.querySelector('#final-score');
    finalScore.textContent = 'Your score is ' + timeLeft;
}

function saveLocalStorage() {
    var inputEl = document.querySelector('#userInput')
    localStorage.setItem('userInitails', inputEl.value)
}


var highScores = JSON.parse(localStorage.getItem('#userInput'));
var listEl = document.querySelector('ul#high-scores');

function renderHighScores() {
    
}



//leaderboard saved in local storage
//href for Highest scores
