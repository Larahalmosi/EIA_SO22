//zähler Aufdgaben//
let total: number = 0;

let add Taskbox: HTMLElement=  document.getElementbyID("addTask");
let newDiv: HTMLElement= document.createElement("div");

document.querySelector("#addBtn").addEventListener("click", addNewTask);
total++; 
document.querySelector("#myinput").innerHTML = String( total + " in total");

let textEingabefeld: HTMLElement = document.createElement("h7");

textEingabefeld.innerHTML = input.value;
textEingabefeld.id = "text";



//Funktion neue Aufgabe//

function addNewTask (): void {
    var newTask: any = document.createElement("li");
    var createCheckIcon: any = document.createElement("i");
    var createDelIcon: any = document.createElement("i");}

    // Counter für Taskboxs in total
    total++; 
    document.querySelector("#summe").innerHTML = String( total + " in total");

    let textEingabefeld: HTMLElement = document.createElement("h7");

    textVonEingabefeld.innerHTML = input.value;
    textVonEingabefeld.id = "text";




//Entertaste//
document.addEventListener("keydown", function (event: KeyboardEvent): void { 
    if (event.keyCode == 13) {
       addNewTask();
    }
});
//Funktionen Icons//
createCheckIcon.addEventListener("click", function(): void {if (!checkedTask) {createCheckIcon.setAttribute("class", "fas fa-check-square"); checkedTask = true; 
createCheckIcon.setAttribute("style", "color: #21d42a"); } else {createCheckIcon.setAttribute("class", "fas fa-square"); checkedTask = false; createCheckIcon.setAttribute("style", "color: white"); }});
createDelIcon.addEventListener("click", function(): void { tasklist.removeChild (newTask); counter--; document.getElementById("summe").innerHTML = "" + counter; });

//event entertase
