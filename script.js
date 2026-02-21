const words = [
    "PLANT","BRICK","MOUSE","TREND","SHOUT","FLARE","COAST","GRIND","PIANO","WRECK",
    "JUMPY","HUMID","SCARF","TOKEN","BLEND","SWIFT","CHALK","DRONE","MAPLE","FOUNT",
    "CLOUD","BRAVE","LIGHT","ROUND","SWEPT","TRACK","PRIDE","GLORY","FRESH","CLIMB",
    "WATER","QUICK","BROWN","VAPOR","ZEBRA","NIGHT","STORM","FAITH","RIVAL","GHOST",
    "PLUCK","CRANE","SHARE","POINT","BLAST","FRAME","SOUND","TIGER","CANDY","ROUTE",
    "SPEAK","FROST","MAGIC","LUNCH","POWER","DREAM","BLAZE","CURVE","SIGHT","GRACE",
    "CABLE","FAINT","SOLVE","MARCH","GUIDE","PRANK","SHIFT","COVER","BRAND","SWEAR",
    "FLOAT","CRISP","SHINE","PLUME","CRAFT","STONE","LAYER","MIGHT","ROAST","QUIET",
    "BLINK","SPLIT","FLOUR","TRICK","VOTER","GRAIN","SHOCK","PAINT","CROWD","FLUID",
    "BREAD","CHAIR","SCORE","THUMB","GLIDE","SPARK","CLEAN","WORST","ROBIN","MOUNT",
    "PLIER","QUEST","CROWN","BRUSH","PLANE","FORCE","WRATH","TOWER","SHELF","FIGHT",
    "DRIVE","BLADE","GRANT","VIRAL","PRIZE","SMOKE","CHORD","ADULT","BASIC","CHIME",
    "DELTA","EPOCH","FAZED","HONEY","INDEX","JOKER","KNIFE","LEMON","MANGO","PLUSH",
    "NOBLE","OCEAN","PULSE","QUART","RADIO","SAUCE","TABLE","VALOR","WALTZ","CLEFT",
    "YOUNG","ZONAL","AGENT","BEACH","CHART","DANCE","EARTH","FIELD","GIANT","HOTEL",
    "IDEAL","LASER","METAL","NURSE","OPERA","PANEL","RANCH","PIXEL","SHARD","BRINK",
    "SOLAR","TEACH","URBAN","SIGMA","WHEAT","YEAST","ABIDE","BIRTH","CLOWN","WOVEN",
    "DROVE","ENJOY","FANCY","GLOVE","HOUSE","IVORY","JUMBO","LIVER","MINOR","VAULT",
    "PAUSE","QUILT","TRAIL","USING","VOTED","WOMAN","FJORD","GLENT","PRONG","SKIRT",
    "YIELD","ZESTY","ALERT","BINGO","ELFIN","FIBER","GAMER","HAVEN","BLUER","CRONY",
];
var randomWord = words[Math.floor(Math.random() * words.length)];
var wordArray = randomWord.split("");
const MAXSCORE = 5;
const MAXROW = 6;
const MAXCOL = 5;
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
    if (gameOver || col > MAXCOL || row > MAXROW) return;

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
    if (col <= MAXCOL) {
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
            document.getElementById("r" + row + "c" + (index + 1)).style.backgroundColor = "rgba(255, 187, 0, 0.3)";
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
    else if (score != MAXSCORE && row == MAXROW) {
        document.getElementById("result").innerText = "HAHA- u loser\n The word was " + randomWord;
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