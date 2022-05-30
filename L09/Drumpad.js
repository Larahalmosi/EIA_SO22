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
var ;
//Remix//
var random = setInterval;
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
    //Loop//  
    document.getElementById("play-button").addEventListener("click", function () {
        var loopstation = setInterval(function () {
            playSample(beat[laufvar]);
            laufvar = laufvar + 1;
            if (laufvar > 2) {
                laufvar = 0;
                //stop//    
                document.getElementById("stop").addEventListener("click", function () {
                    clearInterval(loopstation);
                });
            }
            500;
        });
    });
    //remix//
    document.getElementById("remix").addEventListener("click", function () {
        setInterval(function () {
            playSample(beat[laufvar]);
            random = Math.random();
            laufvar = Math.floor(Math.random());
        }, 500);
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
});
//# sourceMappingURL=Drumpad.js.map