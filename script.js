const questions = [
    {
        question: "Which city is called 'White City' of Rajasthan?",
        answers: [
               { text: " Bihar", correct: false},
               { text: "Jaipur", correct: false},
               { text: "Udaipur", correct: true},
               { text: "Jodhpur", correct: false},
                
        ]
        
    },
    {
        question: "Who was known as Iron Man of India?",
        answers: [
               { text: "Govind Ballabh Pant", correct: false},
               { text: "Jawaharlal Nehru", correct: false},
               { text: " Subhash Chandra Bose", correct: false},
               { text: "Sardar Vallabhbhai Patel", correct: true},       
        ] 
    },
    {
        question: "The minimum age to qualify for election to the Lok Sabha is?",
        answers: [
               { text: "25 years", correct: true},
               { text: "21 years", correct: false},
               { text: "18 years", correct: false},
               { text: "35 years", correct: false},       
        ] 
    },
    {
        question: "For which of the following dicipline is Nobel Prize awarded?",
        answers: [
               { text: "Physics and Chemistry", correct: false},
               { text: "Physiology or Medicine", correct: false},
               { text: " Literature, Peace and Economics", correct: false},
               { text: "All of the above", correct: true},       
        ] 
    },
    {
        question: "Which of these animals was the first to go around the moon in a spacecraft and return to Earth? ",
        answers: [
               { text: "Rabbit", correct: false},
               { text: "Mouse", correct: false},
               { text: "Tortoise", correct: true},
               { text: "Chimpanzee", correct: false},       
        ] 
    },
    {
        question: "Which city is known as the Electronic City of India? ",
        answers: [
               { text: "Mumbai", correct: false},
               { text: " Hyderabad", correct: false},
               { text: " Gurgaon", correct: false},
               { text: "Bengaluru", correct: true},       
        ] 
    },
    {
        question: "Ajanta-Ellora caves are situated in ",
        answers: [
               { text: " Ajmer", correct: false},
               { text: "Jaipur", correct: false},
               { text: " Patna", correct: false},
               { text: "Aurangabad", correct: true},       
        ] 
    },
    {
        question: "Vikram Sarabhai Space Centre is located at",
        answers: [
               { text: " Pune", correct: false},
               { text: "Ahmedabad", correct: false},
               { text: " Sriharikota", correct: true},
               { text: "Thiruvananthapuram", correct: false},       
        ] 
    },
    {
        question: "Who was the first ODI captain of India?",
        answers: [
               { text: "Ajit Wadekar", correct: true},
               { text: "Bishen Singh Bedi", correct: false},
               { text: "Nawab Pataudi", correct: false},
               { text: "Vinod Mankad", correct: false},       
        ] 
    },
    {
        question: "Around 300 Indian soldiers were also evacuated as part of Operation Dynamo by Allies in the World War , from which place in North France?",
        answers: [
               { text: "Dunkirk", correct: true},
               { text: "Normandy", correct: false},
               { text: "Rouen", correct: false},
               { text: "Lille", correct: false},       
        ] 
    }   
];
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
    });
}


function resetState(){
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect){
        selectedBtn.classList.add('correct');    
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;    
    })
    nextButton.style.display = 'block';
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again!';
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();   
    }else{
        showScore();
    }
}

nextButton.addEventListener('click',()=>{
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();