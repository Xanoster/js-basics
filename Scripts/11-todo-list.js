const todoList=[];

function addTodo(){
const item=document.querySelector(".input-box")
todoList.push(item.value);
console.log(todoList);
}