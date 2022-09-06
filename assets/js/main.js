// in game variables

/**
 * pop up modal variables
 */
const welcome_Screen=document.getElementById('welcome-screen');
const start_Modal=document.getElementById("start-game-modal");
const transit_Screen=document.getElementById('transition-screen');
let game_Over= document.querySelector('#game-over');
let next_Btn=document.getElementById('next');
let play_Btn=document.getElementById('play');
let try_Again=document.getElementById('try-again');
let play_Quiz=document.getElementById('play-quiz');
let hitDetector=document.querySelector('.hit-detection');

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
//  let targetGuitar=document.getElementById('target-guitar');


// ccode for input mobile keyboard not distortin layout




// end keyboard

/**
 * optional vars
 */
let dummyInstruments=["../assets/images/dummy1-guilherme-paiva-unsplash.jpg","../assets/images/dummy2-guitar-g341940868_640.jpg","../assetsimages/dummy3-wood-gce9c5bb8c_640.jpg","../assets/images/dummy4-polygon-group-unsplash.jpg"];
let myInstrument=document.createElement('img');
myInstrument.setAttribute('class','my-inst');
// myInstrument.src=dummyInstruments[Math.floor(Math.random()*4)];

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
 targetGuitar.setAttribute('class','guitar')
 targetGuitar.src='assets/images/welcome_guitar-modal-maxime-favier-unsplash.jpg';

/**
 * setting atribute for custom cursor click
 */
shotSpot.setAttribute('id','holeImg');

/**
 * clear the welcome message and modal
 */
next_Btn.addEventListener('click',function(){
    welcome_Screen.setAttribute('class','hide');
})

/**
 * restart the game after
 * user lost all tries to hit the target
 */
try_Again.addEventListener('click',function(){
    document.location.reload(true);
    startGame();
    game_Over.style.display='none';

})

/**
 * add listener to start modal button
 * so user can initiate the game
 */
play_Btn.addEventListener('click',function(){
    start_Modal.setAttribute('class','hide');
    startGame();
})

/**
 * user can proceed to quiz game
 */
play_Quiz.addEventListener('click',function(){
    location.href='quiz.html'
})

/**
 * make custom cursor folow movement of cursor
 * 
 */
function cursor(e){
    myCursor.style.top=(e.pageY) + 'px';
    myCursor.style.left=(e.pageX) + 'px';
}

window.addEventListener('mousemove',cursor);

/**
 * 
 */
function shootingCursor(){
    gameField.addEventListener('click',(e)=>{
        gameField.appendChild(shotSpot);
        shotSpot.style.display='block';
        shotSpot.style.top=(e.pageY-95) + 'px';
        shotSpot.style.left=(e.pageX-15) + 'px';

        console.log(e.pageY);

    });
}

// gameField.addEventListener('click',customholeImg);

// /**
//  * 
//  */
// function customholeImg(e){
//     gameField.appendChild(shotSpot);   
//     shotSpot.style.display='block'
//     shotSpot.style.left=(e.pageX-10) + 'px'
//     shotSpot.style.top=(e.pageY-15) + 'px';

// }

/**
 * recognizing hit and miss of target and updating score and tries
 */
gameField.addEventListener('click',(e)=>{
    if(e.target===targetGuitar){
        score +=10;
        hitDetector.classList.add('show')
        my_score.textContent=score;
        console.log('yes');
    }
    else{
        tries --;
        my_tries.textContent=tries;
        console.log('miss');
    }
    // putting score and tries to matching array as a first element
    currentScore.unshift(score);
    currentTries.unshift(tries);
    // remove hit detection text
    setTimeout(function(){
        hitDetector.classList.remove('show');
    },400)
});

/**
 * gets current score and number of tries and 
 * based on the result either finishes the game
 * or make user proceed to a quiz game 
 */
 function getScore(){
    gameField.addEventListener('click',function(){
        // variables that holds current score and number of tries
        let y=currentScore[0];
        let a=currentTries[0];
        if(y===100){
            // gameField.style.display='none';
            gameField.style.pointerEvents='none';
            transit_Screen.style.display='flex';
        }else if(a===0){
            gameOver();
        }

      
    });
}



/**
 * ending a game
 */
function gameOver(){
    game_Over.style.display='flex';
    gameField.style.pointerEvents='none';
}

/**
 * 
 * function that puts target on
 * random position on ascreen
 */
function makeTargetGuitar(){
    // set random position of target
    let randomPosTop=Math.floor(Math.random()* (gameHeight-130));
    let randomPosLeft=Math.floor(Math.random()* (gameWidth-130));
    targetGuitar.style.top=randomPosTop + 'px';
    targetGuitar.style.left=randomPosLeft + 'px';
    gameField.appendChild(targetGuitar);
    // targetGuitar.style.display='block';
    
}

/**
 * posible function
 */
//  same like make target but (random dummy target and append myInstrument)


/**
 * clicks on a screen counter for setting the game pace
 */
let countClicksInGame=0;
gameField.addEventListener('click',function(){
    countClicksInGame +=1;
});




function startGame(){
    score=0;
    tries=5;
    document.body.style.cursor='none'
    myCursor.style.display='block'
    shootingCursor();
    getScore();
    // make variables to store interval id's so the interval can be cleared
    let i=setInterval(makeTargetGuitar,1300);
    let j=0;
    let k=0;
    let countClicksInGame=0;
    gameField.addEventListener('click',function(){
        countClicksInGame +=1;
        if(countClicksInGame===3){
            // clear first interval
            clearInterval(i);
            gameField.removeChild(targetGuitar);
            j=setInterval(makeTargetGuitar,1100);
        }else if(countClicksInGame===6){
            // clear 2nd interval
            clearInterval(j);
            gameField.removeChild(targetGuitar);
            k=setInterval(makeTargetGuitar,900);
        }
    })
      

}
// startGame();