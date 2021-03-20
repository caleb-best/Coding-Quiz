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

var homeScreen = document.getElementById('playScreen');
var scoreBtn = document.getElementById('score-btn');
var playBtn = document.getElementById('play-btn');

//Timer
var timer = document.getElementById('timer');
timer.style.visibility = 'hidden';
var timeNumber = document.getElementById('timeNumber');
var timeLeft = 60;
var timeInterval;

//Questions and Answer Variable
var quizPrompts = document.getElementById('quiz-prompts');
quizPrompts.style.display = 'none';
var askQuestion = document.getElementById('question');
var btnA = document.getElementById('a');
var btnB = document.getElementById('b');
var btnC = document.getElementById('c');
var btnD = document.getElementById('d');

//End Sceen Variables
var endQuiz = document.getElementById('end-quiz');
endQuiz.style.display = 'none';
var enterName = document.getElementById('initials');
var saveScore = document.getElementById('saveScore');
var leaderboardsBtn = document.getElementById('leaderboards');
var playAgain = document.getElementById('playAgain');
var finalScore = document.getElementById('final-score');

//Leaderboard Screen Variable
var leaderboardScreen = document.getElementById('leaderboardScreen');
leaderboardScreen.style.display = 'none';
var initials = document.getElementById('leaderboard-initials');
var backBtn = document.getElementById('back-home');





//Home Screen Functions
//ON CLick hide other screens and start the quiz and timer
function startQuiz() {
    homeScreen.style.display = 'none';
    endQuiz.style.display = 'none';
    leaderboardScreen.style.display = 'none';
    timer.style.visibility = 'visible';
    quizPrompts.style.display = 'flex';
    quizQuestions();

    timerInterval = setInterval(function() {
        timeLeft--;
        timeNumber.textContent = timeLeft;

        if (timeLeft === 0 || timeLeft < 0) {
            alert('Out of Time!');
            clearInterval(timerInterval);
            endScreen();
        }
    }, 1000);

}
//triggers function startQuiz
playBtn.addEventListener("click", startQuiz);
console.log(startQuiz)

//opens the leaderboards on main screen
function openLeaderboard() {
    leaderboardScreen.style.display = 'flex';
    homeScreen.style.display = 'none';
    endQuiz.style.display = 'none';
    quizPrompts.style.display = 'none';
    timer.style.visibility = 'hidden';
}
//triggers leaderboard button home screen
scoreBtn.addEventListener("click", openLeaderboard);
console.log(openLeaderboard);

//button on leaderboard screen takes you back home
function backHome() {
    leaderboardScreen.style.display = 'none';
    homeScreen.style.display = 'block';
    endQuiz.style.display = 'none';
    quizPrompts.style.display = 'none';
    timer.style.visibility = 'hidden';
}
//triggers back home event
backBtn.addEventListener("click", backHome);

//Question Index
var runningQuestionIndex = 0;
var lastQuestionIndex = questions.length -1;
// Generates the Questions
function quizQuestions(){
    var q = questions[runningQuestionIndex];

    askQuestion.innerHTML = q.question;
    btnA.innerHTML = q.answerA;
    btnB.innerHTML = q.answerB;
    btnC.innerHTML = q.answerC;
    btnD.innerHTML = q.answerD;
    console.log(score);
}

console.log(quizQuestions);

function rightWrong(answer) {
    //checks if the answer is correct or not
    if (answer === questions[runningQuestionIndex].correctAnswer) {
        correctAnswer();
    } else {
        wrongAnswer();
    }
    //check if there are any more questions to ask
    if (runningQuestionIndex < lastQuestionIndex) {
        runningQuestionIndex++;
        quizQuestions();
    }
    //Enters the score if all questions have been answered
    else {
        endScreen();
    }

};

//Starting point for score
var score = 0;

function correctAnswer() {
    alert('Correct Answer');
    score += 100;
}

function wrongAnswer() {
    alert('Wrong Answer -10s')
    timeLeft -= 10;
}

function endScreen() {
    leaderboardScreen.style.display = 'none';
    homeScreen.style.display = 'none';
    endQuiz.style.display = 'flex';
    quizPrompts.style.display = 'none';
    timer.style.visibility = 'hidden';


}

function replay() {
    homeScreen.style.display = 'block';
    endQuiz.style.display = 'none';
    leaderboardScreen.style.display = 'none';
    timer.style.visibility = 'hidden';
    quizPrompts.style.display = 'none';
}

//makes play again button function
playAgain.addEventListener("click", replay);
console.log(replay)











