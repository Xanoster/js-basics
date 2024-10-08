let Score = JSON.parse(localStorage.getItem('Score')) || {
    Wins: 0,
    loses: 0,
    ties: 0
};

function updateScore() {
    document.querySelector('.js-scores').innerHTML = `Loses = ${Score.loses} & Wins = ${Score.Wins} & Ties = ${Score.ties}`;
}


function resetScore() {
    Score.Wins = 0;
    Score.loses = 0;
    Score.ties = 0;
    localStorage.removeItem('Score');
    updateScore(); 
}


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