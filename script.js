const words = ["plant", "brick", "mouse", "trend", "shout", "flare", "coast", "grind", "piano", "wreck", "jumpy", "humid", "scarf", "token", "blend", "swift", "chalk", "drone", "maple", "fount"];

var randomWord = words[Math.floor(Math.random() * 21)];

const wordArray = randomWord.split("");

let text = "";
for(let index = 0; index < 5; index++) {
    text += wordArray[index] + " ";
}
document.getElementById("fno").innerText = text;
document.getElementById("fn1").innerText = randomWord;