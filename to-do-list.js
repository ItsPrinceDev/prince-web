const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList()

function renderTodoList(){
  let todoListHTML = '';

for (let i = 0; i < todoList.length; i++) {
  const todoObject = todoList[i];
  const {name, dueDate} = todoObject;

  const html = `
    <div class="added-text">
      <div>${name}</div>
      <div>${dueDate}</div>
    </div>

    <div class="delete-container">
      <button class="delete" onclick="
      todoList.splice(${i}, 1);
      saveTodoList()
      renderTodoList();
      ">Delete</button>
    </div>
    `;
  todoListHTML += html;
}

document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
}


function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-date-input');
  const dueDate = dateInputElement.value;
  
  todoList.push({
    name,
    dueDate
  });

  saveTodoList()

  inputElement.value = '';
  dateInputElement.value = '';

  renderTodoList();
}

function saveTodoList() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}