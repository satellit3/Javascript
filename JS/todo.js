const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");
let toDos =[];

const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove()
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}


function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "✖️";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    //console.log(toDoInput.value);
    toDoInput.value = "";
    //value 값을 비움.
    //console.log(newTodo, toDoInput.value);
    //newToDo에는 아무런 영향이 없다.
    //toDoInput을 비웠다고 해서, newToDo도 비워지는 것은 아님.
    const newTodoObj = {
        text:newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos)
/*
function sayHello(item){
    console.log("hello", item);
}
*/

if(saveToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);
   // parsedToDos.forEach(sayHello);
   // parsedToDos.forEach((item) => console.log("hello", item));
   toDos = parsedToDos;
   parsedToDos.forEach(paintToDo);
}

