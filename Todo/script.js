//grab dom elements and store in JS variables
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
const container = document.querySelector('.itemContainer');

let newTasksList;
const tasksKey = "tasks";

window.onload = (event) =>{
    const toDoTaskFromLs = JSON.parse(localStorage.getItem(tasksKey));
    toDoTaskFromLs.map((aryitem)=>{
        updateTodoTasksListForUser(aryitem);
    });
}

const saveTaskToLocalStorage = (taskName) => {
    const existingTasks = JSON.parse(localStorage.getItem(tasksKey));
    if (existingTasks == undefined) {
        newTasksList = []
    } else {
        newTasksList = existingTasks;
    }
    newTasksList.push(taskName);
    localStorage.setItem(tasksKey, JSON.stringify( newTasksList));
}

const deleteTaskForUser = (li) => {
 ul.removeChild(li)
}

const removeFromLocalStorage = (t) => {
    const itemFromLS = JSON.parse(localStorage.getItem(tasksKey));
    const matchedIndex = itemFromLS.indexOf(t);
    itemFromLS.splice(matchedIndex,1);
    localStorage.setItem(tasksKey, JSON.stringify(itemFromLS));

}

const updateTodoTasksListForUser = (x) => {
    const list = document.createElement('li');
    const spanWithValue = document.createElement("span");
    const spanWithBtn = document.createElement("button");

    spanWithValue.innerText = x;
    spanWithBtn.innerText = "X";

    // add checkbox to the list on click
    spanWithBtn.addEventListener("click", () => {
       removeFromLocalStorage(x);
       list.classList.toggle('checked');
        setTimeout(() => {
          deleteTaskForUser(list)
        },1000);
       
    });

    list.appendChild(spanWithValue);
    list.appendChild(spanWithBtn);
    ul.appendChild(list);
}

const addTaskToToDoList = () => {
    const task = input.value;
    if(task == ''){
        alert("Enter the name of task");
    }else{
        saveTaskToLocalStorage(task);
        updateTodoTasksListForUser(task)
        input.value = '';
    }
    
}
