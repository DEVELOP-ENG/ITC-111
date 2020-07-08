// CODE EXPLAINED channel

//select element 
const clear = document.querySelector(".clear");
const dataElement = document.getElementById("date");
const list = document.getElementById ("list");
const input = document.getElementById("input");

//classes names 
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//Show todays date
const options = {weeday : "long", month:"short", day:"numeric"};
const today = new Date();
dataElement.innerHTML = today.toLocaleDateString("en-US", options)

function addToDo(toDo, id, done, trash){
   
    if(trash){ return; }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item =`<li class="item"
                <i class="fa ${DONE} co" job = "complete" id="${id}"></i>
                <p class="text ${LINE}">{toDo}</p>
                <i class="fa fa-trash-o de" job = "delete" id="0"></i>
                </li> 
                `;
    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
}
document.addEventListener("keyup",function(even)){
    if(event.keyCode == 13){
        const toDo =input.value;
        if(toDo){
            addToDo(toDo);
        }
        input
    }
}

addToDo("Cofee", 1, false, false)