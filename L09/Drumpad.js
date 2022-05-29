//abspielen sounds//
function playSample(soundname) {
    var sound = new Audio(soundname);
    sound.play();
    sound.currentTime = 0;
}
var sounds = ["kick.mp3", "snare.mp3", "hihat.mp3", "G.mp3", "A.mp3", "F.mp3", "C.mp3", "laugh-1.mp3", "snare.mp3"];
//Playbutton//
var beat = [
    "kick.mp3",
    "snare.mp3",
    "hihat.mp3"
];
var laufvar = 0;
//Stop//
//Stop//
function stopplay() {
    if (document.getElementById("play-button").getAttribute("class") == "fas fa-play") {
        document.getElementById("play-button").setAttribute("class", "fa-solid fa-stop");
    }
    else {
        document.getElementById("play-button").setAttribute("class", "fas fa-play");
        deleteBeat();
    }
}
//Remix//
function stopbeat() {
    document.getElementById("play-button").setAttribute("class", "far fa-stop-circle");
    beatPlaying = false;
}
// Anweisungen//
window.addEventListener("load", function () {
    document.getElementById("hihat").addEventListener("click", function () { playSample("hihat.mp3"); });
    document.getElementById("kick").addEventListener("click", function () { playSample("kick.mp3"); });
    document.getElementById("snare").addEventListener("click", function () { playSample("snare.mp3"); });
    document.getElementById("f").addEventListener("click", function () { playSample("F.mp3"); });
    document.getElementById("g").addEventListener("click", function () { playSample("G.mp3"); });
    document.getElementById("a").addEventListener("click", function () { playSample("A.mp3"); });
    document.getElementById("c").addEventListener("click", function () { playSample("C.mp3"); });
    document.getElementById("laugh-1").addEventListener("click", function () { playSample("laugh-1.mp3"); });
    document.getElementById("laugh-2").addEventListener("click", function () { playSample("laugh-2.mp3"); });
    document.getElementById("play-button").addEventListener("click", function () {
        setInterval(function () {
            playSample(beat[laufvar]);
            laufvar = laufvar + 1;
            if (laufvar > 2) {
                laufvar = 0;
            }
        }, 500);
    });
    document.getElementById("play").addEventListener("click", function () { stopplay(); });
    document.querySelector("remix").addEventListener("click", function () { e(); });
});
//key//
window.addEventListener("load", function () {
    document.addEventListener("keydown", (event) => { if (event.key == "0") {
        playSample("hihat.mp3");
    } });
    document.addEventListener("keydown", (event) => { if (event.key == "1") {
        playSample("kick.mp3");
    } });
    document.addEventListener("keydown", (event) => { if (event.key == "2") {
        playSample("snare.mp3");
    } });
    document.addEventListener("keydown", (event) => { if (event.key == "3") {
        playSample("F.mp3");
    } });
    document.addEventListener("keydown", (event) => { if (event.key == "4") {
        playSample("G.mp3");
    } });
    document.addEventListener("keydown", (event) => { if (event.key == "5") {
        playSample("A.mp3");
    } });
    document.addEventListener("keydown", (event) => { if (event.key == "6") {
        playSample("C.mp3");
    } });
    document.addEventListener("keydown", (event) => { if (event.key == "7") {
        playSample("laugh-1.mp3");
    } });
    document.addEventListener("keydown", (event) => { if (event.key == "8") {
        playSample("laugh-2.mp3");
    } });
});
//# sourceMappingURL=Drumpad.js.map