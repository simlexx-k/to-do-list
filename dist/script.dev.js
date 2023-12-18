"use strict";

function addTask() {
  var taskInput = document.getElementById('taskInput');
  var dueDateInput = document.getElementById('dueDateInput');
  var taskList = document.getElementById('taskList');

  if (taskInput.value.trim() !== '') {
    var table = document.getElementById('taskTable');
    var newRow = table.insertRow(table.rows.length);
    var taskCell = newRow.insertCell(0);
    var dueDateCell = newRow.insertCell(1);
    var actionCell = newRow.insertCell(2);
    taskCell.textContent = taskInput.value;
    dueDateCell.textContent = dueDateInput.value || 'N/A';
    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';

    removeButton.onclick = function () {
      table.deleteRow(newRow.rowIndex);
    };

    actionCell.appendChild(removeButton);
    taskInput.value = '';
    dueDateInput.value = '';
  }
}