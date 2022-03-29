document.querySelector('#push').onclick = function () {
    if (document.querySelector('#author').value.length == 0 || document.querySelector('#title').value.length == 0) {
        alert("Please Enter a correct string")
    }
    else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    <input disabled="disabled" type="text", value=\"${document.querySelector('#author').value}\"></input>
                    <input disabled="disabled" type="text", value=\"${document.querySelector('#title').value}\"></input>
                </span>
                <div id="buttons">
                    <button id="edit">Edit
                    </button>
                    <button id="delete">
                        Delete
                        <i class="far fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        `;

        var current_tasks = document.querySelectorAll("#delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.parentNode.remove();
            }
        }
        current_tasks = document.querySelectorAll("#edit");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                var x = this.parentNode.parentNode.getElementsByTagName("input")[0].disabled;
                if (x) {
                    this.innerText = "Save"
                    var inputs = this.parentNode.parentNode.getElementsByTagName("input")
                    for (const element of inputs) {
                        element.disabled = false;
                        element.style.borderBottom = "thin dotted black";
                    }
                } else {
                    this.innerText = "Edit"
                    var inputs = this.parentNode.parentNode.getElementsByTagName("input")
                    for (const element of inputs) {
                        element.disabled = true;
                        element.style.borderBottom = "none";
                    }
                }
            }
        }
    }
}

document.querySelector("#remove").onclick = function () {
    document.getElementById("author").value = ""
    document.getElementById("title").value = ""
}