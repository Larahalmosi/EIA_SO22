//abspielen sounds//
function playSample(audioFile) {
    var sound = new Audio(audioFile);
    sound.play();
    function kick() {
        var sound = new Audio('kick.mp3');
        sound.play();
    }
    function button2() {
        var sound = new Audio('snare.mp3');
        sound.play();
    }
    function button3() {
        var sound = new Audio('hihat.mp3');
        sound.play();
    }
    function button4() {
        var sound = new Audio('G.mp3');
        sound.play();
    }
    function button5() {
        var sound = new Audio('A.mp3');
        sound.play();
    }
    function button6() {
        ;
        var sound = new Audio('F.mp3');
        sound.play();
    }
    function button7() {
        var sound = new Audio('C.mp3');
        sound.play();
    }
    function button8() {
        var sound = new Audio('laugh-1.mp3');
        sound.play();
    }
    function button9() {
        var sound = new Audio('laugh-2.mp3');
        sound.play();
    }
    var sounds = ['kick', 'snare.mp3', 'hihat.mp3', 'G.mp3', 'A.mp3', 'F.mp3', 'C.mp3', 'laugh-1.mp3', 'snare.mp3'];
}
var tryout = [sounds[2], sounds[3], sounds[2]];
//Playbutton//
setInterval(function () {
    kick.play();
    snare.play();
    hihat.play();
}, 500);
// Anweisungen//
window.addEventListener("load", function () {
    document.getElementById("hihat").addEventListener("click", function () { playSample(sounds[0]); });
    document.getElementById("kick").addEventListener("click", function () { playSample(sounds[1]); });
    document.getElementById("snare").addEventListener("click", function () { playSample(sounds[2]); });
    document.getElementById("F").addEventListener("click", function () { playSample(sounds[3]); });
    document.getElementById("G").addEventListener("click", function () { playSample(sounds[4]); });
    document.getElementById("A").addEventListener("click", function () { playSample(sounds[5]); });
    document.getElementById("C").addEventListener("click", function () { playSample(sounds[6]); });
    document.getElementById("laugh-1").addEventListener("click", function () { playSample(sounds[7]); });
    document.getElementById("laugh-2").addEventListener("click", function () { playSample(sounds[8]); });
});
//# sourceMappingURL=Drumpad.js.map