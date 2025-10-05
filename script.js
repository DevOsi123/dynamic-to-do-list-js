document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Array to store tasks in JS
    let tasks = [];

    // Load tasks from Local Storage and populate the list
    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            tasks = JSON.parse(savedTasks);
            tasks.forEach(function(taskText) {
                createTaskElement(taskText);
            });
        }
    }

    // Create a task <li> with remove button, append to taskList
    function createTaskElement(taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        removeButton.onclick = function () {
            taskList.removeChild(listItem);

            // Remove task from tasks array
            tasks = tasks.filter(function(task) {
                return task !== taskText;
            });

            // Update Local Storage after removal
            localStorage.setItem('tasks', JSON.stringify(tasks));
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    }

    // Add a new task (called on button click or Enter key)
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            createTaskElement(taskText);

            // Add to tasks array and save to Local Storage
            tasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));

            // Clear input field
            taskInput.value = '';
        } else {
            alert("Enter a task");
        }
    }

    // Event listeners for adding tasks
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load saved tasks on page load
    loadTasks();
});
