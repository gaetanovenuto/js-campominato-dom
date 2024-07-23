const playButton = document.getElementById('play-button');

playButton.addEventListener('click', game)


const bombArray = [];

let scoreArray = [];
    
let cellsNumber = 100;

const myContainer = document.getElementById('grid-container');
    

function game() {    
    scoreArray = [];

    myContainer.style.opacity = '1';

    const difficultySelect = document.getElementById('difficulty');

    if (difficultySelect.value == '2') {
        cellsNumber = 81;
    }

    else if (difficultySelect.value == '3') {
        cellsNumber = 49;
    }

    myContainer.innerHTML = '';

    let computerNumber = 0;

    let k = 1;

    while(k <= 16) {

        computerNumber = getRndInteger(1, cellsNumber);
        console.log(computerNumber);

        if (!bombArray.includes(computerNumber)) {
            bombArray.push(computerNumber);
            
            k++;
        }
    }
    console.log(bombArray);

    const result = document.getElementById('result');

    result.style.display = 'none';

    const restart = document.getElementById('restart');

    restart.style.display = 'none';

    const score = document.getElementById('score');

    score.style.display = 'none';

    for (let i = 1; i <= cellsNumber; i++) {
        
        const singleCell = document.createElement('div');
        
        singleCell.innerHTML = i;

        myContainer.append(singleCell);

        if (cellsNumber == 100) {
            singleCell.classList.add('easy');
        }

        else if (cellsNumber == 81) {
            singleCell.classList.add('intermediate');
        }

        else if (cellsNumber == 49) {
            singleCell.classList.add('hard');
        }

        singleCell.addEventListener('click', cellClick)   
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }  
}



 

function cellClick() {
    console.log('CLICK');
    const i = parseInt(this.innerText);
    if (bombArray.includes(i)) {
        this.classList.add('bomb');
        result.innerHTML = 'Hai perso!' ;
        restart.style.display = 'block';
        result.style.display = 'block';
        myContainer.style.opacity = '0.3';
        restart.addEventListener('click', game);
        this.replaceWith(this.cloneNode(true)); 
    }

    else {
        if (!this.classList.contains('safe')) {
            this.classList.add('safe');
            scoreArray.push(i);
        }
  
        score.innerHTML = parseInt(scoreArray.length);
        if (scoreArray.lenght == parseInt(cellsNumber - 16)) {
            result.innerHTML = 'Hai vinto!';
            restart.style.display = 'block';
            result.style.display = 'block';
        }
    }

    score.style.display = 'block';


}