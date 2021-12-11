document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoInput = document.getElementById('new-task-description');
  buildToDo(todoInput.value);  
  form.reset();
  });
});

function buildToDo(todo) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'x'
  li.textContent = `${todo} `;
  li.appendChild(btn);
  //const taskList = document.getElementById('tasks');
  //console.log(taskList);
  //taskList.appendChild(p);
  document.getElementById('tasks').appendChild(li);
};

function handleDelete(e) {
  e.target.parentNode.remove();
};


/* function prioritySelect() {
  let prioritySelect = document.createElement('select').setAttribute('id', 'priorityList');
  let highPriority = document.createElement('option').setAttribute('id', 'high');
  prioritySelect.appendChild(highPriority);
  document.querySelector('form').appendChild(prioritySelect);
}; */



//const todoInput = document.getElementById('new-task-description');
//console.log(todoInput);
//const submitButton = document.querySelector('form').querySelectorAll('input')[1];
//console.log(submitButton);
//submitButton.setAttribute('id', 'submit-new-task-button');
//console.log(submitButton);
