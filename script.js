document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            // Create <li>
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            // Create Remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";

            // ✅ Use classList.add() as required
            removeButton.classList.add('remove-btn');

            // Remove task when button is clicked
            removeButton.onclick = function () {
                taskList.removeChild(listItem);
            };

            // Append button to li, then li to ul
            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);

            // Clear input field
            taskInput.value = '';
        } else {
            alert("Enter a task");
        }
    }

    // ✅ Add task on button click
    addButton.addEventListener('click', addTask);

    // ✅ Add task on Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // ✅ Call addTask once when page loads (if needed)
    addTask();
});
