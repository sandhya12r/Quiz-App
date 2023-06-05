const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "What does CSS stands for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Central Simple Sheets",
        correct: "b"
    },
    {
        question: "What does HTML stands for?",
        a: "HyperText Markup Language",
        b: "HyperText Machine Language",
        c: "HyperText Making Language",
        d: "HighText Markup Language",
        correct: "a"
    },

    {
        question: "What year was JavaScript Launched?",
        a: "1996",
        b: "1997",
        c: "1995",
        d: "none of the above",
        correct: "c"
    }
];

//getting elements in js 
const quiz = document.getElementById('quiz')
const queElement = document.getElementById('question')
const atext = document.getElementById('atext')
const btext = document.getElementById('btext')
const ctext = document.getElementById('ctext')
const dtext = document.getElementById('dtext')
const submitBtn = document.getElementById('submit')
const ansElement = document.querySelectorAll('.answer')

let currentQuiz = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    queElement.innerText = currentQuizData.question
    atext.innerText = currentQuizData.a
    btext.innerText = currentQuizData.b
    ctext.innerText = currentQuizData.c
    dtext.innerText = currentQuizData.d
}

function deselectAnswers() {
    ansElement.forEach(ansEl =>
        ansEl.checked = false
    )
}

let score = 0;

function getSelected() {
    let answer

    ansElement.forEach(ansEl => {
        if (ansEl.checked) {
            answer = ansEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        }else{
            quiz.innerHTML = 
            `<h2> You Answered ${score}/${quizData.length} questions correctly</h2>
            <button onClick="location.reload()">Relaod</button> `
        }
    }
})