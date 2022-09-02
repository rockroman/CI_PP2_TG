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