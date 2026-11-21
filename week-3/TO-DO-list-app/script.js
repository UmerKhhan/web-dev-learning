// ^ for displaying todays's date
const dateElement = document.getElementById("day-display");
const today = new Date();
let tasks = [];

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "short",
};
dateElement.innerHTML = today.toLocaleDateString("en-US", options);
const task_table = document.querySelector("#table tbody");

const att_onClick_btns = () => {
  const newTask = document.querySelector(".new-task");
    let taskInput = document.querySelector("#new_task_input");
      
    taskInput.value = "";
    newTask.style.display = "block";
    newTask.style.opacity = "1";
    newTask.style.scale = "1";
};




let closeWindow = (element) => {
  element.style.display = "none";
};
// new tasks
const new_task_submit_btn = document.querySelector(".new-task-submit");
//on click submit task function
const submit_task = () => {
  let newId = Date.now();
  let taskInput = document.querySelector("#new_task_input");
  if (taskInput.value === "") {
    document.querySelector(".input-error.empty-error").style.display = "block";
      
  } else {
    view_task(taskInput, task_table, newId);
    tasks.push({
      task: taskInput.value,
      id: newId,
      status: false,
    });

    document.querySelector(".input-error.empty-error").style.display = "none";
    closeWindow(document.querySelector(".new-task"));
    localStorage.setItem("myTasks", JSON.stringify(tasks));
  }
};

//^ new task att on click


//* this lets enter works to submit the task
document.querySelector("body").addEventListener("keydown", (event) => {
  if (document.querySelector(".new-task").style.display === "block") {
    if (event.key === "Enter") {
      submit_task();
    }
  }
});

//* this shows task on the table
const view_task = (TaskInput, TaskTable, taskId) => {
  const row = document.createElement("tr");
  row.setAttribute("data-id",taskId)
  row.innerHTML = `
    <td>
    <div class="inputCheckBox">
    <input type="checkbox"  class="task-check-box">
    <span for="task-check-box">${TaskInput.value}</span>
    </div>
    <div class ="extraBtns">
        <button class = "editBtn" onclick=""><i class="fa-regular fa-pen-to-square"></i></button>
        <button class = "deleteBtn"><i class="fa-solid fa-trash-can"></i></button>
    </div>
    </td>
    
    `;
  TaskTable.append(row);
};


//* this is for checkbox and change
task_table.addEventListener("change", (event) => {
  // Check if the element that was changed is a checkbox
  if (event.target.matches('.inputCheckBox input[type="checkbox"]')) {
    const checkbox = event.target;
    const taskSpan = checkbox.parentElement.querySelector("span");
    let row = event.target.closest('tr');
    const taskId = Number(row.getAttribute("data-id"));
    const taskToCheck = tasks.find((task)=>{
    return task.id === taskId;  
  })

    if (checkbox.checked) {
      taskSpan.style.textDecoration = "line-through";
      taskSpan.style.color = "#ccc";
      taskToCheck.status = true;
    } else {
      taskSpan.style.textDecoration = "none";
      taskSpan.style.color = "#000";
      taskToCheck.status = false;
    }
    localStorage.setItem("myTasks", JSON.stringify(tasks));
  }
});
let currentTaskSpan;
let currentEditedTask;
let currentTaskId;

//! This listener should be on a parent of all tasks, such as the tbody or div container
//! to handle clicks on any edit button.
task_table.addEventListener("click", (event) => {
  if (event.target.closest(".extraBtns .editBtn")) {
    const btn = event.target;
    const taskTd = btn.closest("td");
    const taskSpan = taskTd.querySelector("span");
    const editWindow = document.querySelector(".edit-task");
    const editedInput = document.querySelector(".edit_task_input");
    let row = event.target.closest('tr');
    const taskId = Number(row.getAttribute("data-id"));

    // 1. Store the references to the current task's elements
    currentTaskSpan = taskSpan;
    currentEditedTask = editedInput;
    currentTaskId = taskId;


    // 3. Show the edit window
    editWindow.style.display = "block";


    // 2. Pre-populate the input field with the current task's text
    editedInput.value = taskSpan.innerHTML;
  }
  if(event.target.closest('.deleteBtn')){
    let row = event.target.closest('tr');
    const taskId = Number(row.getAttribute("data-id"));

    tasks = tasks.filter((task)=>{return task.id !== taskId});
    row.remove();
    localStorage.setItem("myTasks", JSON.stringify(tasks));
  }
});

// This is a separate listener for the submit button, attached once
document.querySelector(".edit-task-submit").addEventListener("click", () => {

    currentTaskSpan.innerHTML = currentEditedTask.value;
    const taskToEdit = tasks.find((task)=>{
      return task.id === currentTaskId;  

    })
    if(taskToEdit){
      taskToEdit.task = currentEditedTask.value;
    }

    closeWindow(document.querySelector('.edit-task'));
    localStorage.setItem("myTasks", JSON.stringify(tasks));
  currentTaskSpan = null;
  currentEditedTask = null;
  currentTaskId = null;
});

document.querySelector('.close-new-task').addEventListener("click",event=>{
  document.querySelector('.new-task').style.display="none";
  document.querySelector(".input-error.empty-error").style.display = "none";
  
})
document.querySelector('.close-edit-task').addEventListener("click",event =>{
  document.querySelector('.edit-task').style.display="none";
  document.querySelector(".input-error.empty-error").style.display = "none";

})



const savedData = localStorage.getItem("myTasks");

if(savedData){
  tasks = JSON.parse(savedData);
  tasks.forEach((task)=>{
    const fakeinput = {value: task.task};

    view_task(fakeinput,task_table,task.id)

    if(task.status === true){
      const lastrow = task_table.lastElementChild;

      const checkbox = lastrow.querySelector('input[type="checkbox"]');
      const span = lastrow.querySelector('span');

      checkbox.checked = true;
      span.style.textDecoration = "line-through";
      span.style.color = "#ccc";
    }
  });
}
