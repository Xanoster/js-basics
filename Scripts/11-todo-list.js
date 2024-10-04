const todoList=JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { name, date } = todoObject;

        const html = `<div>${name}</div>
        <div> ${date} </div>
        <button 
        onclick="deleteTodo(${i})" class='delete_button'>Delete</button>`;
        todoListHTML += html;
    }
    document.querySelector('.items').innerHTML = todoListHTML;
}

function addTodo() {
    const nameElement = document.querySelector(".input-box");
    const name = nameElement.value;
    const dateElement = document.querySelector(".date");
    const date = dateElement.value;
    todoList.push({ name, date });
    localStorage.setItem('todoList', JSON.stringify(todoList)); 
    nameElement.value = '';
    renderTodoList();
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(todoList)); 
    renderTodoList();
}
