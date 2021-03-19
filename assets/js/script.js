//Questions Array
var questions = [
    {
        question: 'The condition in an if / else statement is enclosed with _______.',
        answerA: '1. quotes',
        answerB: '2. curly brackets',
        answerC: '3. parenthesis',
        answerD: '4. square brackets',
        correctAnswer: 'c'
    },
    {
        question: 'Arrays in JavaScript can be used to store _______.',
        answerA: '1. numbers and strings',
        answerB: '2. other arrays',
        answerC: '3. booleans',
        answerD: '4. all of the above',
        correctAnswer: 'd'
    },
    {
        question: 'String values must be enclosed within _______ when being assigned to variables.',
        answerA: '1. commas',
        answerB: '2. curly brackets',
        answerC: '3. quotes',
        answerD: '4. parenthesis',
        correctAnswer: 'c'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answerA: '1. JavaScript',
        answerB: '2. terminal/bash',
        answerC: '3. for loops',
        answerD: '4. console.log',
        correctAnswer: 'd'
    },
    {
        question: 'Commonly used data types DO NOT include:',
        answerA: '1. strings',
        answerB: '2. booleans',
        answerC: '3. alerts',
        answerD: '4. numbers',
        correctAnswer: 'c'
    }
];
//log array
console.log(questions);

//DOM ELEMENTS 
var quizPrompts = document.getElementById('questions');
var homeScreen = document.getElementById('playScreen');
var endQuiz = document.getElementById('end-quiz');
var finalScore = document.getElementById('final-score');
var startQuiz = document.getElementById('play-btn');
var timer = document.getElementById('timer');
var timeLeft = document.getElementById('timeLeft');

//Questions and Answer Variable
var askQuestion = document.getElementById('question');
var btnA = document.getElementById('a');
var btnB = document.getElementById('b');
var btnC = document.getElementById('c');
var btnD = document.getElementById('d');

//End Sceen Variables
var endQuiz = document.getElementById('end-quiz');
var enterName = document.getElementById('initials');
var saveScore = document.getElementById('saveScore');
var leaderboardsBtn = document.getElementById('leaderboard-info');
var playAgain = document.getElementById('playAgain');

//Leaderboard Screen Variable
var leaderboards = document.getElementById('leaderboards');
var initials = document.getElementById('leaderboard-initials');
var backBtn = document.getElementsByClassName('back-btn');








