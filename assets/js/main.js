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

/**
 * optional vars
 */
let dummyInstruments=["../assets/images/dummy1-guilherme-paiva-unsplash.jpg","../assets/images/dummy2-guitar-g341940868_640.jpg","../assetsimages/dummy3-wood-gce9c5bb8c_640.jpg","../assets/images/dummy4-polygon-group-unsplash.jpg"]
let myInstrument=document.createElement('img');
myInstrument.setAttribute('class','my-inst');
myInstrument.src=dummyInstruments[Math.floor(Math.random()*4)];

/**
 * defining the game field width and height
 */
 let gameHeight=gameField.offsetHeight;
 let gameWidth=gameField.offsetWidth;

 /**
  * create target element and set atribute for the same
  */
 let targetGuitar=document.createElement('img');
 targetGuitar.setAttribute('id','target-guitar');
 targetGuitar.src=`../assets/images/welcome_guitar-maxime-favier-unsplash.jpg`;

/**
 * setting atribute for custom cursor click
 */
shotSpot.setAttribute('class','holeImg');