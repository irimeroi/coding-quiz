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
        title: 'Where is the Eiffel Tower located?',
        choices: ['London', 'Paris', 'Buenos Aires', 'Los Angeles'],
        correctAnswer: 'Paris',
        lastStep: false
    },
    {
        title: 'What is the official language of the United States',
        choices: ['English', 'Spanish', 'Italian', 'It does not have an official language'],
        correctAnswer: 'It does not have an official language',
        lastStep: false
    },
    {
        title: 'Who won the 2022 FIFA World Cup?',
        choices: ['Argentina', 'France', 'Brazil', 'Spain'],
        correctAnswer: 'Argentina',
        lastStep: false
    },
    {
        title: 'After Russia, what is the second largest country by area in the world?',
        choices: ['China', 'United Stated of America', 'Canada', 'Brazil'],
        correctAnswer: 'Canada',
        lastStep: false
    },
    {
        title: 'Which option does NOT belong to one of the Seven Wonders of the New World?',
        choices: ['The Great Pramyd of Giza', 'The Great Wall of China', 'Machu Picchu', 'The Statue of Zeus at Olympia'],
        correctAnswer: 'The Statue of Zeus at Olympia',
        lastStep: true
    }
];

//start Quiz button
startBtnEl.addEventListener('click', startQuiz);

//function that starts the quiz
function startQuiz() {
    startTimer();
    startQuizEl.style.display = "none";
    questionsBoxEl.style.display = "block";
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
    summaryEl.style.display = 'block';
}

function saveLocalStorage() {
    var inputEl = document.querySelector('#userInput')
    localStorage.setItem('userInitails', inputEl.value)
}


//leaderboard saved in local storage
//href for Highest scores
