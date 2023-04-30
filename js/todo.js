const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");



const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // array를 string로
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}
  
function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const button = document.createElement("button");
    button.innerText = "✔️";

    const span = document.createElement("span");
    span.innerText = "\t"+newTodoObj.val;

    
    
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
    
    span.style.color = "white";
    span.className = "shadow";
    toDoForm.className = "positionTodo";
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        id:Date.now(),
        val:newTodo
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


    const savedToDos = localStorage.getItem(TODOS_KEY);
    if (savedToDos !== null) {
        const parsedToDos = JSON.parse(savedToDos); // string을 array로
        toDos = parsedToDos;
        parsedToDos.forEach(paintToDo);
            
        
    }
