const gameBoard = document.getElementById('game-board');
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const cards = [...letters, ...letters];
cards.sort(() => Math.random() - 0.5);

let firstCard = null;
let secondCard = null;
let lockBoard = false;

function createCard(letter) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.letter = letter;
    card.addEventListener('click', flipCard);
    gameBoard.appendChild(card);
}

function flipCard() {
    if (lockBoard || this === firstCard) return;

    this.classList.add('flipped');
    this.textContent = this.dataset.letter;

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.dataset.letter === secondCard.dataset.letter;
    if (isMatch) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    resetBoard();

    if (document.querySelectorAll('.card:not(.matched)').length === 0) {
        setTimeout(() => {
            const congratsMessage = document.createElement('div');
            congratsMessage.textContent = 'CONGRATULATIONS! YOU WON!';
            congratsMessage.style.fontSize = '20px';
            congratsMessage.style.color = '#6b4f4f';
            congratsMessage.style.marginTop = '20px';
            document.body.appendChild(congratsMessage);
        }, 500);
    }
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        firstCard.textContent = '';
        secondCard.textContent = '';
        resetBoard();
    }, 1000);
}

function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

cards.forEach(createCard);