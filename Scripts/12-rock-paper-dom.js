let Score = JSON.parse(localStorage.getItem('Score')) || {
    Wins: 0,
    loses: 0,
    ties: 0
};

function updateScore() {
    document.querySelector('.js-scores').innerHTML =
     `Loses = ${Score.loses} & Wins = ${Score.Wins} & Ties = ${Score.ties}`;
}



const reset=function resetScore() {
    Score.Wins = 0;
    Score.loses = 0;
    Score.ties = 0;
    localStorage.removeItem('Score');
    updateScore(); 
}
document.querySelector('.Reset-button')
.addEventListener('click',()=>{
    reset();
})

function pickComputerMove() {
    const random = Math.random();
    if (random < 1/3) {
        return 'Rock';
    } else if (random < 2/3) {
        return 'Paper';
    } else {
        return 'Scissor';
    }
}
let isAutoPlaying=false;
let intervalId=0;

const playAuto=function autoPlay(){
    if(!isAutoPlaying){
intervalId = setInterval(function(){
        const playerMove=pickComputerMove();
     playGame(playerMove);
    },1000) ;
    isAutoPlaying=true;
}else{
    clearInterval(intervalId);
    isAutoPlaying=false;
}
}
document.querySelector('.autoplay-button')
.addEventListener('click',()=>{
    playAuto();
})

document.querySelector('.js-rock')
.addEventListener('click',()=>{
    playGame('rock');
})
document.querySelector('.js-paper')
.addEventListener('click',()=>{
    playGame('paper');
})
document.querySelector('.js-scissor')
.addEventListener('click',()=>{
    playGame('scissor');
})
//play by pressing key
document.body.addEventListener('keydown',(event)=>{
if(event.key==='r'){
playGame('rock');
}
else if(event.key==='p'){
playGame('paper');
}
else if(event.key==='s'){
playGame('scissor');
} 
else if(event.key==='a'){
   playAuto();
}
else if(event.key=='z'){
    reset();
}
else{
alert("Invalid")
}
});
function playGame(playerMove) {
    const cm = pickComputerMove();
    let result = '';

    if (playerMove === 'Rock') {
        if (cm === 'Rock') {
            result = 'Tie';
            Score.ties++;
        } else if (cm === 'Paper') {
            result = 'You Lose';
            Score.loses++;
        } else {
            result = 'You Win';
            Score.Wins++;
        }
    } else if (playerMove === 'Paper') {
        if (cm === 'Paper') {
            result = 'Tie';
            Score.ties++;
        } else if (cm === 'Scissor') {
            result = 'You Lose';
            Score.loses++;
        } else {
            result = 'You Win';
            Score.Wins++;
        }
    } else if (playerMove === 'Scissor') {
        if (cm === 'Paper') {
            result = 'You Win';
            Score.Wins++;
        } else if (cm === 'Scissor') {
            result = 'Tie';
            Score.ties++;
        } else {
            result = 'You Lose';
            Score.loses++;
        }
    }

 

    localStorage.setItem('Score', JSON.stringify(Score));
    document.querySelector('.js-scores').innerHTML = `<p class="result-class"> Result : ${result} </p>
        <p>You <img src="images/${playerMove}-emoji.png" class="button-img">
<img src="images/${cm}-emoji.png" class="button-img">Computer</p>
Loses = ${Score.loses} & Wins = ${Score.Wins} & Ties = ${Score.ties}`;
}
updateScore();