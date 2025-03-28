const questions = [
    { question: "What is the capital of France?", options: ["London", "Paris", "Berlin", "Rome"], answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
    { question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], answer: "Blue Whale" },
    { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"], answer: "William Shakespeare" },
    { question: "What is the chemical symbol for water?", options: ["Wa", "H2O", "Ox", "CO2"], answer: "H2O" },
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;

const questionContainer = document.getElementById('question-container');
const timeDisplay = document.getElementById('timer');

function displayQuestion() {
    if (!questionContainer) return;

    const questionData = questions[currentQuestion];
    questionContainer.innerHTML = `
        <div class="question">${questionData.question}</div>
        <div class="options"></div>
    `;

    const optionsContainer = questionContainer.querySelector(".options");

    questionData.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", handleAnswer);
        optionsContainer.appendChild(button);
    });
}

function handleAnswer(event) {
    const selectedOption = event.target.textContent;
    const correctAnswer = questions[currentQuestion].answer;

    if (selectedOption === correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function updateTimer() {
    timeLeft--;
    if (timeDisplay) {
        timeDisplay.textContent = timeLeft;
    }

    if (timeLeft <= 0) {
        endQuiz();
    }
}

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function endQuiz() {
    clearInterval(timerInterval);
    window.location.href = 'result.html?score=${score}&time=${60 - timeLeft}';
}

if (questionContainer) {
    displayQuestion();
    startTimer();
}