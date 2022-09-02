/**
 * in game variables
 * Element variables
 */
let question=document.getElementById('question');
let choices=Array.from(document.getElementsByClassName('choice-text'));
let progressBarFull=document.getElementById('progressBarFull');
let userScore=document.getElementById('userScore');
let nextQuestion=document.getElementById('next');

/**
 * functionality variables
 */
let acceptAnswers=false;
let score=0;
let questionCounter=0;
let maxQuestionNumber=4;
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
}

/**
 * getting new question
 */
function getQuestion(){
    if(setOfQuestions.length===0 || questionCounter >= maxQuestionNumber){
        // end game
        console.log(('THE END'));
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
    console.log(setOfQuestions);
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
        console.log(selectedAnswer);
        console.log(currentQuestion.answer);

        // check if answer is true or false
        if(selectedAnswer==currentQuestion.answer){
            console.log('correct');
            incrementScore();
        }
        else{
            console.log('wrong');
        }
        setTimeout(function(){
            nextQuestion.classList.add('show');
        },1200)
    });
});

/**
 * nextquestion button]
 * functionality
 */
nextQuestion.addEventListener('click',function(){
    setTimeout(function(){
        nextQuestion.classList.remove('show');
        getQuestion();
    },800);
});

startQuiz();