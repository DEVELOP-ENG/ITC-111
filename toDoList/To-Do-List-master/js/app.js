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
function addToDo(toDo){
    const item = '
                <li class = "item"
                <i class="fa fa-circle-thin co" job = "complete" id="0"></i>
                <p class="text">{toDo}</p>
                <i class="fa fa-trash-o de" job = "delete" id="0"></i>
                </li> 
                ';
}