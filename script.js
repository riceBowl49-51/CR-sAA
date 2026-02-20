const words = [
    "PLANT", "BRICK", "MOUSE", "TREND", "SHOUT",
    "FLARE", "COAST", "GRIND", "PIANO", "WRECK",
    "JUMPY", "HUMID", "SCARF", "TOKEN", "BLEND",
    "SWIFT", "CHALK", "DRONE", "MAPLE", "FOUNT"
];
var randomWord = words[Math.floor(Math.random() * words.length)];
var wordArray = randomWord.split("");
const MAXSCORE = 5;
var gameOver = false;

var row = 1;
var col = 1;

const board = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
];

function onLetterClicked(letter) {
    if (gameOver || col > 5 || row > 6) return;

    board[row - 1][col - 1] = letter;

    document.getElementById("r" + row + "c" + col).innerText = letter;

    col++;
}

function onDelClicked() {
    if (gameOver || col == 1) return;
    col--;

    board[row - 1][col - 1] = "";

    document.getElementById("r" + row + "c" + col).innerText = "";
}

function onEnterClicked() {
    if (col <= 5) {
        document.getElementById("result").innerText = "Finish the word first!";
        return;
    }

    document.getElementById("result").innerText = "";

    let score = 0;

    for (let index = 0; index < 5; index++) {
        let guessedLetter = board[row - 1][index];

        if (guessedLetter == wordArray[index]) {
            document.getElementById("r" + row + "c" + (index + 1)).style.backgroundColor = "rgba(60, 255, 0, 0.30)";
            score++;
        }
        else if (wordArray.includes(guessedLetter)) {
            document.getElementById("r" + row + "c" + (index + 1)).style.backgroundColor = "rgba(255, 230, 0, 0.30)";
        }
        else {
            document.getElementById("r" + row + "c" + (index + 1)).style.backgroundColor = "rgba(255, 0, 0, 0.30)";
        }
    }

    if (score == MAXSCORE) {
        document.getElementById("result").innerText = "WoW u win!";
        document.getElementById("restart").style.visibility = "visible";
        gameOver = true;
        return;
    }
    else if (score != MAXSCORE && row == 6) {
        document.getElementById("result").innerText = "HAHA- u loser";
        document.getElementById("restart").style.visibility = "visible";
        gameOver = true;
        return;
    }

    row++;
    col = 1;
}

function resetButton() {
    gameOver = false;
    randomWord = words[Math.floor(Math.random() * words.length)];
    wordArray = randomWord.split("");

    for (let r = 0; r < 6; r++) {
        for (let c = 0; c < 5; c++) {
            board[r][c] = "";
            let cell = document.getElementById("r" + (r + 1) + "c" + (c + 1));
            cell.innerText = "";
            cell.style.backgroundColor = "";
        }
    }

    row = 1;
    col = 1;

    document.getElementById("result").innerText = "";

    document.getElementById("restart").style.visibility = "hidden";
}