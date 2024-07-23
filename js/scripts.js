const playButton = document.getElementById('play-button');

playButton.addEventListener('click', game)

    

function game() {     
    const myContainer = document.getElementById('grid-container');

    myContainer.style.opacity = '1';

    const difficultySelect = document.getElementById('difficulty');
    
    let cellsNumber = 100;

    if (difficultySelect.value == '2') {
        cellsNumber = 81;
    }

    else if (difficultySelect.value == '3') {
        cellsNumber = 49;
    }

    myContainer.innerHTML = '';

    let computerNumber = 0;

    const bombArray = [];

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

    const scoreArray = [];

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

        singleCell.addEventListener('click',
            function() {
                if (bombArray.includes(i)) {
                    singleCell.classList.add('bomb');
                    result.innerHTML = 'Hai perso!' ;
                    restart.style.display = 'block';
                    result.style.display = 'block';
                    myContainer.style.opacity = '0.1';
                    restart.addEventListener('click', game);
                    
                }

                else {
                    singleCell.classList.add('safe');
                    scoreArray.push(i);
                    score.innerHTML = parseInt(scoreArray.length);
                    if (scoreArray.lenght == cellsNumber - 16) {
                        result.innerHTML = 'Hai vinto!' ;
                        restart.style.display = 'block';
                        result.style.display = 'block';
                    }
                }

            score.style.display = 'block'
            }
        )    
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }  
}



