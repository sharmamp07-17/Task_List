// #1
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('task-list');
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// #2

const addTask = () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const task = { text: taskText };
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskInput.value = '';
  displayTasks();
}

// #3

const deleteTask = (index) => {
  alert("Are you to delete the task!")
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

// #4

const editTask = (index) => {
  const editText = prompt('Edit task:', tasks[index].text);
  if (editText !== null) {
    tasks[index].text = editText;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  }
}

// #5

const displayTasks = () => {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.add('flex')
    li.innerHTML = `
            <p><input class="taskdesc" type="text"
                value=${task.text}
                readonly></p>
            <div class="btns flex">
              <span class="edit"  onclick="editTask(${index})">Edit</span>
              <span class="delete"  onclick="deleteTask(${index})">Delete</span>
            </div>`;
    taskList.appendChild(li)
  });
}
displayTasks()

