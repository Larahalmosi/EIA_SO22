//Zähler//
var counter = 0;
//Tastatur//
window.addEventListener("load", function () {
    document.querySelector("input").addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
            if (document.querySelector("input").value != "") {
                createTask();
                document.querySelector("input").value = "";
            }
            else {
                alert("Error 271: Must not be empty!");
            }
        }
    });
});
//Erstellt die Task//
function createTask() {
    counter++;
    document.getElementById("summe").innerHTML = "" + counter;
    let checkedTask = false;
    let input = document.querySelector("input").value;
    var tasklist = document.getElementById("tasklist");
    var createText = document.createElement("p");
    var newTask = document.createElement("li");
    var createCheckIcon = document.createElement("i");
    var createDelIcon = document.createElement("i");
    tasklist.appendChild(newTask);
    newTask.appendChild(createCheckIcon);
    createCheckIcon.classList.add("fas", "fa-square");
    createCheckIcon.setAttribute("id", "check");
    newTask.appendChild(createText);
    createText.innerHTML = input;
    newTask.appendChild(createDelIcon);
    createDelIcon.classList.add("fas", "fa-trash-alt");
    //Funktionen Icons//
    createCheckIcon.addEventListener("click", function () {
        if (!checkedTask) {
            createCheckIcon.setAttribute("class", "fas fa-check-square");
            checkedTask = true;
        }
        else {
            createCheckIcon.setAttribute("class", "fas fa-square");
        }
    });
    createDelIcon.addEventListener("click", function () { tasklist.removeChild(newTask); counter--; document.getElementById("summe").innerHTML = "" + counter; });
}
//# sourceMappingURL=script.js.map