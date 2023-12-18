// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    // Check if the input is not empty
    if (taskInput.value.trim() !== '') {
      // Create a new list item
      const listItem = document.createElement('li');
  
      // Create a span to hold the task text
      const taskText = document.createElement('span');
      taskText.textContent = taskInput.value;
  
      // Create a button to remove the task
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.onclick = function () {
        listItem.remove();
      };
  
      // Append elements to the list item
      listItem.appendChild(taskText);
      listItem.appendChild(removeButton);
  
      // Append the list item to the task list
      taskList.appendChild(listItem);
  
      // Clear the input field
      taskInput.value = '';
    }
  }
  