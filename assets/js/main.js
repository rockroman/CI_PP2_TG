// in game variables

/**
 * pop up modal variables
 */
let welcome_Screen=document.getElementById('welcome-screen');
let start_Modal=document.getElementById("start-game-modal");
let transit_Screen=document.getElementById('transition-screen');
let game_Over= document.getElementById('game-over');
let next_Btn=document.getElementById('next');
let play_Btn=document.getElementById('play');
let try_Again=document.getElementById('try-again');
let play_Quiz=document.getElementById('play-quiz');

/**
 * game screen variables
 */
 let gameField=document.getElementById('game-field');
 let myCursor=document.querySelector('.cursor');
 let shotSpot=document.createElement('div');
 let my_score=document.getElementById('my_score');
 let my_tries=document.getElementById('my_tries');
 let score=0;
 let tries=5;
 let currentScore=[];
 let currentTries=[];
