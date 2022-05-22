//abspielen sounds//

function playSample (audioFile): void {
    var sound: HTMLAudioElement = new Audio(audioFile);
    sound.play();


function kick(){
var sound:HTMLAudioElement= new Audio('kick.mp3');
sound.play();
}
function button2(){
var sound:HTMLAudioElement = new Audio('snare.mp3');
sound.play();
}
function button3(){
var sound:HTMLAudioElement = new Audio('hihat.mp3');
sound.play();
}
function button4(){
var sound:HTMLAudioElement = new Audio('G.mp3');
sound.play();
}
function button5(){
var sound:HTMLAudioElement = new Audio('A.mp3');
sound.play()
}
function button6(){
;var sound:HTMLAudioElement = new Audio('F.mp3');
sound.play();
}
function button7(){
var sound:HTMLAudioElement = new Audio('C.mp3');
sound.play();
}
function button8(){
var sound:HTMLAudioElement = new Audio('laugh-1.mp3');
sound.play();
}
function button9(){
var sound:HTMLAudioElement = new Audio('laugh-2.mp3');
sound.play();
}


var sounds: string [] = [ 'kick', 'snare.mp3', 'hihat.mp3','G.mp3', 'A.mp3','F.mp3','C.mp3','laugh-1.mp3','snare.mp3']
}
var tryout:string [] = [sounds[2],sounds[3],sounds[2]]



//Playbutton//

setInterval(function play-button () {
    kick.play();
    snare.play();
    hihat.play();
 }, 500);

// Anweisungen//

window.addEventListener("load", function(): void {
    document.getElementById("hihat").addEventListener("click", function(): void {playSample(sounds[0]); });
    document.getElementById("kick").addEventListener("click", function(): void {playSample(sounds[1]); });
    document.getElementById("snare").addEventListener("click", function(): void {playSample(sounds[2]); });
    document.getElementById("F").addEventListener("click", function(): void {playSample(sounds[3]); });
    document.getElementById("G").addEventListener("click", function(): void {playSample(sounds[4]); });
    document.getElementById("A").addEventListener("click", function(): void {playSample(sounds[5]); });
    document.getElementById("C").addEventListener("click", function(): void {playSample(sounds[6]); });
    document.getElementById("laugh-1").addEventListener("click", function(): void {playSample(sounds[7]); });
    document.getElementById("laugh-2").addEventListener("click", function(): void {playSample(sounds[8]); });
)