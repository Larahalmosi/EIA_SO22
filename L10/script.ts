//Zähler//
var counter: number = 0;

   //Tastatur//
window.addEventListener("load", function(): void {
    document.querySelector("input").addEventListener("keydown", (event) => { if (event.keyCode === 13) { if (document.querySelector("input").value != "") 
    { createTask(); document.querySelector("input").value = ""; } else {alert("Error 271: Must not be empty!"); }}});

});

//Erstellt die Task//
function createTask(): void {
    counter++;
    document.getElementById("summe").innerHTML = "" + counter;
    let checkedTask: boolean = false;
    let input: string = document.querySelector("input").value;
    var tasklist: any = document.getElementById("tasklist");
    var createText: any = document.createElement("p");
    var newTask: any = document.createElement("li");
    var createCheckIcon: any = document.createElement("i");
    var createDelIcon: any = document.createElement("i");
    tasklist.appendChild(newTask);
    newTask.appendChild(createCheckIcon);
    createCheckIcon.classList.add("fas", "fa-square");
    createCheckIcon.setAttribute("id", "check");
    newTask.appendChild(createText);
    createText.innerHTML = input;
    newTask.appendChild(createDelIcon);
    createDelIcon.classList.add("fas", "fa-trash-alt");

 

    //Funktionen Icons//
    createCheckIcon.addEventListener("click", function(): void {if (!checkedTask) {createCheckIcon.setAttribute("class", "fas fa-check-square"); checkedTask = true;  } 
    else {createCheckIcon.setAttribute("class", "fas fa-square"); }});
    createDelIcon.addEventListener("click", function(): void { tasklist.removeChild (newTask); counter--; document.getElementById("summe").innerHTML = "" + counter; });
}