/**
 * in game variables
 * Element variables
 */
let question=document.getElementById('question');
let choices=Array.from(document.getElementsByClassName('choice-text'));
let progressBarFull=document.getElementById('progressBarFull');
let userScore=document.getElementById('userScore');
let endQuiz=document.getElementById('next');
let myButtons=document.querySelectorAll('.answers');
let thankYouScreen=document.getElementById('thank-you');
let thankYouForm=document.querySelector('#thank-you-form');
let againBtn=document.getElementById('again');
let quizScore=document.querySelector('#quizScore');
let  submitBtn=document.querySelector('#submit');

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
        },1500)
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
            location.href='index.html'
        })
      
       
    },800);

 
});





startQuiz();

/**
 * set up email js service
 */
// new

   

   
    




// end new








//  submitBtn.addEventListener("click", function (event) {
//    event.preventDefault();
  
//    const serviceID = 'service_uklo3ca';
//    const templateID = "template_eiz3yrh";

//    // send the email here
//    emailjs.sendForm('serviceID','templateID' , thankYouForm).then(
//      (response) => {
//        console.log("SUCCESS!", response.status, response.text);
//        return;
//        alert("SUCCESS!");
//      },
//      (error) => {
//        console.log("FAILED...", error);
//        alert("FAILED...", error);
//      }
//    );
//  });

//  submitBtn.addEventListener('click',function(){
    

//  });



 