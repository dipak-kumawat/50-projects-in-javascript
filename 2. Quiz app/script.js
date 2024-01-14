const question = [
    {
        question: "Which is largest animal in the world?",
        answers:[
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Where is the Shivneri Fort?",
        answers:[
            {text: "Pune", correct: true},
            {text: "Buldana", correct: false},
            {text: "Mumbai", correct: false},
            {text: "Nagpur", correct: false},
        ]
    },{
        question: "Which components are used in petrol to reduce to air pollution?",
        answers:[
            {text: "Hydrocarbons", correct: false},
            {text: "Cyclic hydrocarbons", correct: false},
            {text: "Carbon Dioxide", correct: false},
            {text: "carbon monoxide", correct: true},
        ]
    },{
        question: "Pandit Ravi Shankar is related to ....",
        answers:[
            {text: "Sitar", correct: true},
            {text: "Table", correct: false},
            {text: "Flute", correct: false},
            {text: "Sarod", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNO + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classlist.add("btn");
        answerButton.appendChild(button);
    });
}

function resetState(){
    nextButton.style.display = "none;
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

startQuiz();