document.addEventListener('DOMContentLoaded', () => {
    let = squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('click', handleClick);
    });
    showPlayer();
})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setInterval(() => {
            let symbol = board[square.id];
            let h = document.getElementsByTagName("h3")[0];
            h.innerHTML = `<div class='${symbol}'> <p><br><br><br><br>Vencedor !!</p></div>`;
        }, 50);
    }
    updateSquares(position);
}

function updateSquares(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[square.id];
    square.innerHTML = `<div class='${symbol}'></div>`;
    showPlayer();

}

function showPlayer() {
    let h = document.getElementsByTagName("h4")[0];
    h.innerHTML = ` Vez do Jogador ${(playerTime == 0) ? 1 : 2}`;
}