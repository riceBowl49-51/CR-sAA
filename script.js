const words = [
    "PLANT", "BRICK", "MOUSE", "TREND", "SHOUT",
    "FLARE", "COAST", "GRIND", "PIANO", "WRECK",
    "JUMPY", "HUMID", "SCARF", "TOKEN", "BLEND",
    "SWIFT", "CHALK", "DRONE", "MAPLE", "FOUNT"
];
var randomWord = words[Math.floor(Math.random() * words.length)];
const wordArray = randomWord.split("");
const MAXSCORE = 5;

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

let text = "";
for (let index = 0; index < 5; index++) {
    text += wordArray[index] + " ";
}
document.getElementById("fno").innerText = text;
document.getElementById("fn1").innerText = randomWord;

function onLetterClicked(letter) {
    if (col > 5 || row > 6) return;

    board[row - 1][col - 1] = letter;

    document.getElementById("r" + row + "c" + col).innerText = letter;

    col++;
}

function onDelClicked() {
    if (col == 1) return;
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
    document.getElementById("fn2").innerText = "";

    let score = 0;

    for (let index = 0; index < 5; index++) {
        let guessedLetter = board[row - 1][index];

        if (guessedLetter == wordArray[index]) {
            document.getElementById("fn2").innerText += "correct\n";
            score++;
        }
        else if (wordArray.includes(guessedLetter)) {
            document.getElementById("fn2").innerText += "wrong spot\n";
        }
        else {
            document.getElementById("fn2").innerText += "not in word\n";
        }
    }

    if (score == MAXSCORE) {
        document.getElementById("result").innerText = "WoW u win!";
        return;
    }
    else if (score != MAXSCORE && row == 6) {
        document.getElementById("result").innerText = "HAHA- u loser";
        return;
    }

    row++;
    col = 1;
}