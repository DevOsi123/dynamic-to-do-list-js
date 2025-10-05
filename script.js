document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Enter a task");
        } else {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            removeButton.onclick = function () {
                taskList.removeChild(listItem);
            };

            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);

            taskInput.value = ''; // clear input
        }
    }

    // ✅ 1. Add click listener to button
    addButton.addEventListener('click', addTask);

    // ✅ 2. Add Enter key listener to input
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // ✅ 3. Call addTask when the page loads
    addTask();
});
