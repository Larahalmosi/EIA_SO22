var

let total :number=0;
let oben: number=0;
let done:number=0;

let add Taskbox: HTMLElement=  document.getElementbyID("addTask");
let newDiv: HTMLElement= document.createElement("div");

document.querySelector("#addBtn").addEventListener("click", addNewTask);
total++; 
document.querySelector("#myinput").innerHTML = String( total + " in total");

let textEingabefeld: HTMLElement = document.createElement("h7");

textEingabefeld.innerHTML = input.value;
textEingabefeld.id = "text";
//Entertaste//
document.addEventListener("keydown", function (event: KeyboardEvent): void { 
    if (event.keyCode == 13) {
       addNewTask();
    }
});
