/**
 * in game variables
 * Element variables
 */
let question=document.getElementById('question');
let choices=Array.from(document.getElementsByClassName('choice-text'));
let progressBarFull=document.getElementById('progressBarFull');
let userScore=document.getElementById('userScore');
const endQuiz=document.getElementById('next');
let myButtons=document.querySelectorAll('.answers');
const thankYouScreen=document.getElementById('thank-you');
const againBtn=document.getElementById('again');
let quizScore=document.querySelector('#quizScore');

// import all questions from questions.js file
import {allQuestions} from "./questions.js";

/**
 * functionality variables
 */
let acceptAnswers=false;
let score=0;
let questionCounter=0;
let maxQuestionNumber=10;
let currentQuestion={};
let setOfQuestions=[];

/**
 * initialize quiz
 */
function startQuiz(){
    questionCounter=0;
    score=0;
    // populate array with questions from external js file
    setOfQuestions=[...allQuestions];
    getQuestion();  
}

/**
 * getting new question
 */
function getQuestion(){
    // clear button colors  with new question
    for(let i=0;i<myButtons.length;i++){
        myButtons[i].classList.remove('wrong','correct');
    }
    if(setOfQuestions.length===0 || questionCounter >= maxQuestionNumber){
        setTimeout(function(){
            endQuiz.classList.add('show');
            },1000);
        // end game
        endQuiz.classList.add('show');
        endQuiz.textContent='END QUIZ';
        return;
    }
    questionCounter++;
    // updating progress bar
    progressBarFull.style.width=`${(questionCounter/maxQuestionNumber) * 100}%`;
    // get index of a question from question array
    let questIndex=Math.floor(Math.random() * setOfQuestions.length);
    currentQuestion=setOfQuestions[questIndex];
    question.textContent=currentQuestion.question;
    // populate questions answers from array
    choices.forEach(choice=>{
        let number=choice.dataset.number;
        choice.textContent=currentQuestion['choice'+number];
    });
    // remove current question from array
    setOfQuestions.splice(questIndex,1);
    acceptAnswers=true;

}

/**
 * Get users answer
 */
choices.forEach(choice =>{
    choice.addEventListener('click', e =>{
        if(!acceptAnswers)return;
        acceptAnswers=false;
        // recognize what was users choice
        let selectedChoice=e.target;
        let selectedAnswer=selectedChoice.dataset.number;
       
        // check if answer is true or false
        if(selectedAnswer==currentQuestion.answer){
            console.log('correct');
            // give coresponding color to correct and wrong answers
            for(let i=0;i < myButtons.length;i++){
                myButtons[i].classList.add('wrong');
            }
            e.target.classList.add('correct');
            incrementScore();
        }
        else{
            for(let i=0;i < myButtons.length;i++){
                myButtons[i].classList.add('wrong');
            }
            myButtons[currentQuestion.answer-1].classList.add('correct');
            console.log('wrong');
        }
        setTimeout(function(){
            getQuestion();
        },1500);
    });
});

function incrementScore(){
    score++;
    userScore.textContent=score;
}

/**
 * endQuiz button
 * functionality
 */
endQuiz.addEventListener('click',function(){
    setTimeout(function(){
        document.getElementById('quiz-stats').style.display='none';
        question.style.display='none';
        document.getElementById('button-group').style.display='none';
        thankYouScreen.style.display='block';
        quizScore.textContent=userScore.textContent;
        againBtn.addEventListener('click',function(){
            location.href='index.html';
        });  
       
    },800);

});

startQuiz();


 