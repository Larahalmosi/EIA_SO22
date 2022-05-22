//abspielen sounds//
function playSample(audioFile) {
    var sound = new Audio(audioFile);
    sound.play();
    function button1() {
        var sound = new Audio('kick.mp3');
        sound.play();
        sound.currentTime = 0;
    }
    function button2() {
        var sound = new Audio('snare.mp3');
        sound.play();
        sound.currentTime = 0;
    }
    function button3() {
        var sound = new Audio('hihat.mp3');
        sound.play();
        sound.currentTime = 0;
    }
    function button4() {
        var sound = new Audio('G.mp3');
        sound.play();
        sound.currentTime = 0;
    }
    function button5() {
        var sound = new Audio('A.mp3');
        sound.play();
        sound.currentTime = 0;
    }
    function button6() {
        var sound = new Audio('F.mp3');
        sound.play();
        sound.currentTime = 0;
    }
    function button7() {
        var sound = new Audio('C.mp3');
        sound.play();
        sound.currentTime = 0;
    }
    function button8() {
        var sound = new Audio('laugh-1.mp3');
        sound.play();
        sound.currentTime = 0;
    }
    function button9() {
        var sound = new Audio('laugh-2.mp3');
        sound.play();
        sound.currentTime = 0;
    }
    var sounds = ['kick', 'snare.mp3', 'hihat.mp3', 'G.mp3', 'A.mp3', 'F.mp3', 'C.mp3', 'laugh-1.mp3', 'snare.mp3'];
}
var tryout = [sounds[2], sounds[3], sounds[2]];
//Playbutton//
setInterval(function play() { } - button(), {
    sound, [0]: .play(),
    sound, [1]: .play(),
    sound, [2]: .play()
}, 500);
500;
;
// Anweisungen//
window.addEventListener("load", function () {
    document.getElementById("hihat").addEventListener("click", button1);
    document.getElementById("kick").addEventListener("click", button2);
    document.getElementById("snare").addEventListener("click", button3);
    document.getElementById("F").addEventListener("click", button4);
    document.getElementById("G").addEventListener("click", button5);
    document.getElementById("A").addEventListener("click", button6);
    document.getElementById("C").addEventListener("click", button7);
    document.getElementById("laugh-1").addEventListener("click", button8);
    document.getElementById("laugh-2").addEventListener("click", button9);
});
//# sourceMappingURL=Drumpad.js.map