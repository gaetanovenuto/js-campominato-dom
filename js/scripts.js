const playButton = document.getElementById('play-button');

playButton.addEventListener('click', 
    function() {     
        const myContainer = document.getElementById('grid-container');

        const difficultySelect = document.getElementById('difficulty');
        
        let cellsNumber = 100;

        if (difficultySelect.value == '2') {
            cellsNumber = 81;
        }

        else if (difficultySelect.value == '3') {
            cellsNumber = 49;
        }

        myContainer.innerHTML = '';

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
                    singleCell.classList.add('bg-lightcoral');
                }
            )
        }
    }
)

