var alfabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k"
]

var letterArray = []
var win = 0;
var losses = 0;
var heartLeft = 9;

function randomLetter() {
    compLetter = alfabet[Math.floor(Math.random() * alfabet.length)]
}

function heart() {
    document.querySelector(".gleft").innerHTML = heartLeft;
}

function letterWrite() {
    document.querySelector(".guess").innerHTML = letterArray.join(",")
}

function reset() {
    heartLeft = 9;
    letterArray = [];
    randomLetter()
    heart()
    letterWrite()
}

randomLetter()
heart()

window.onkeypress = function (e) {
    yourLetter = e.key
    letterArray.push(yourLetter)
    letterWrite()
    if (yourLetter === compLetter) {
        win++;
        document.querySelector(".win").innerHTML = win
        reset()
    } else {
        heartLeft--;
        heart()
    }
    if (heartLeft === 0) {
        losses++;
        document.querySelector(".lose").innerHTML = losses;
        reset()
    }
}