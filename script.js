// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get input value and trim whitespace

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create <li> element for the new task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Add click event to remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button to the task item
        li.appendChild(removeBtn);

        // Append the task item to the list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Add event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Allow adding task using the Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optionally call addTask here if you want initial population
    // For now, we leave this blank since the list starts empty
});
