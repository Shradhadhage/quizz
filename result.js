const params = new URLSearchParams(window.location.search);
const score = params.get("score") || 0;  // Default to 0 if null
const timeTaken = params.get("time") || 0;  // Default to 0 if null

// Manually set the total number of questions
const totalQuestions = 10;

// Ensure the elements exist before modifying them
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time-taken");

if (scoreElement) {
    scoreElement.textContent =' Your Score: ${score} / ${totalQuestions}';
}
if (timeElement) {
    timeElement.textContent = 'Time Taken: ${timeTaken} seconds';
}

function restartQuiz() {
    function restartQuiz() {
        window.location.href =' result.html?score=${score}&time=${60 - timeLeft}';
    }
}