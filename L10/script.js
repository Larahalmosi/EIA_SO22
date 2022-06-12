var let, total = 0;
let oben = 0;
let done = 0;
let add, Taskbox = document.getElementbyID("addTask");
let newDiv = document.createElement("div");
document.querySelector("#addBtn").addEventListener("click", addNewTask);
total++;
document.querySelector("#myinput").innerHTML = String(total + " in total");
let textEingabefeld = document.createElement("h7");
textEingabefeld.innerHTML = input.value;
textEingabefeld.id = "text";
//Entertaste//
document.addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
        addNewTask();
    }
});
//# sourceMappingURL=script.js.map