  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', toggleTaskCompletion);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', deleteTask);

      li.appendChild(checkbox);
      li.appendChild(document.createTextNode(taskText));
      li.appendChild(deleteButton);

      taskList.appendChild(li);

      taskInput.value = ''; // Clear the input field after adding the task
    }
  }

  function toggleTaskCompletion(event) {
    const checkbox = event.target;
    const taskText = checkbox.nextSibling;
    if (checkbox.checked) {
      taskText.classList.add('completed');
    } else {
      taskText.classList.remove('completed');
    }
  }

  function deleteTask(event) {
    const li = event.target.parentElement;
    li.remove();
  }

  window.addTask = addTask; // Expose the addTask function globally for the button onclick attribute
