function addTask() {
  const taskInput = document.getElementById('taskInput');
  const dueDateInput = document.getElementById('dueDateInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() !== '') {
    const table = document.getElementById('taskTable');
    const newRow = table.insertRow(table.rows.length);

    const taskCell = newRow.insertCell(0);
    const dueDateCell = newRow.insertCell(1);
    const actionCell = newRow.insertCell(2);

    taskCell.textContent = taskInput.value;
    dueDateCell.textContent = dueDateInput.value || 'N/A';

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function () {
      table.deleteRow(newRow.rowIndex);
    };

    actionCell.appendChild(removeButton);

    taskInput.value = '';
    dueDateInput.value = '';
  }
}