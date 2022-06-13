let total = 0;
let add, Taskbox = document.getElementbyID("addTask");
let newDiv = document.createElement("div");
document.querySelector("#addBtn").addEventListener("click", addNewTask);
total++;
document.querySelector("#myinput").innerHTML = String(total + " in total");
let textEingabefeld = document.createElement("h7");
textEingabefeld.innerHTML = input.value;
textEingabefeld.id = "text";
//Funktion, die bei Klick auf Plus-Button neues InputText-Element ans Div(addBoxDiv) hängt
function addNewTask() {
    var newTask = document.createElement("li");
    var createCheckIcon = document.createElement("i");
    var createDelIcon = document.createElement("i");
}
// Counter für Taskboxs in total
total++;
document.querySelector("#summe").innerHTML = String(total + " in total");
let textEingabefeld = document.createElement("h7");
textVonEingabefeld.innerHTML = input.value;
textVonEingabefeld.id = "text";
//Entertaste//
document.addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
        addNewTask();
    }
});
//Funktionen Icons//
createCheckIcon.addEventListener("click", function () {
    if (!checkedTask) {
        createCheckIcon.setAttribute("class", "fas fa-check-square");
        checkedTask = true;
        createCheckIcon.setAttribute("style", "color: #21d42a");
    }
    else {
        createCheckIcon.setAttribute("class", "fas fa-square");
        checkedTask = false;
        createCheckIcon.setAttribute("style", "color: white");
    }
});
createDelIcon.addEventListener("click", function () { tasklist.removeChild(newTask); counter--; document.getElementById("summe").innerHTML = "" + counter; });
//event entertase
//# sourceMappingURL=script.js.map