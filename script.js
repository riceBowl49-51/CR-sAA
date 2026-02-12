var ltrr1c1 = "";
var ltrr1c2 = "";
var ltrr1c3 = "";
var ltrr1c4 = "";
var ltrr1c5 = "";
var row = 1;

const words = ["plant", "brick", "mouse", "trend", "shout", "flare", "coast", "grind", "piano", "wreck", "jumpy", "humid", "scarf", "token", "blend", "swift", "chalk", "drone", "maple", "fount"];

var randomWord = words[Math.floor(Math.random() * 21)];

const wordArray = randomWord.split("");

let text = "";
for(let index = 0; index < 5; index++) {
    text += wordArray[index] + " ";
}
document.getElementById("fno").innerText = text;
document.getElementById("fn1").innerText = randomWord;

function onLetterClicked(letter) {
    if (row = 1) {
        if (ltrr1c1 === "") {
            ltrr1c1 = letter;
            document.getElementById("r1c1").innerText = ltrr1c1;
        }

        else if (ltrr1c2 === "") {
            ltrr1c2 = letter;
            document.getElementById("r1c2").innerText = ltrr1c2;
        }

        else if (ltrr1c3 === "") {
            ltrr1c3 = letter;
            document.getElementById("r1c3").innerText = ltrr1c3;
        }

        else if (ltrr1c4 === "") {
            ltrr1c4 = letter;
            document.getElementById("r1c4").innerText = ltrr1c4;
        }

        else if (ltrr1c5 === "") {
            ltrr1c5 = letter;
            document.getElementById("r1c5").innerText = ltrr1c5;
        }
    }

    else if (row = 2) {
        if (ltrr2c1 === "") {
            ltrr2c1 = letter;
            document.getElementById("r2c1").innerText = ltrr1c1;
        }

        else if (ltrr1c2 === "") {
            ltrr1c2 = letter;
            document.getElementById("r1c2").innerText = ltrr1c2;
        }

        else if (ltrr1c3 === "") {
            ltrr1c3 = letter;
            document.getElementById("r1c3").innerText = ltrr1c3;
        }

        else if (ltrr1c4 === "") {
            ltrr1c4 = letter;
            document.getElementById("r1c4").innerText = ltrr1c4;
        }

        else if (ltrr1c5 === "") {
            ltrr1c5 = letter;
            document.getElementById("r1c5").innerText = ltrr1c5;
        }
    }


}

function onEnterClicked() {
    if (ltrr1c5 == "") {
        document.getElementById("result").innerText = "YOUR GAY TYPE TO FINISH ";
    }

    else if (ltrr1c5 !== "") {
        row + 1;
    }
}
