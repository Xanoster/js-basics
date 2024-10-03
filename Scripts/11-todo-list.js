const todoList=[{
    name:'Code for 30 minutes',
    date:'10/3/2024'
}];
renderTodoList();

function renderTodoList(){
let todoListHTML='';
for(let i=0;i<todoList.length;i++){
    const todoObject=todoList[i];

    //const name=todoObject.name;
   // const date=todoObject.duedate;
     
   const {name,date}=todoObject;

    const html=`<div>${name}</div>
    <div> ${date} </div>
    <button 
    onclick="todoList.splice(${i},1);
    renderTodoList();
    " class='delete_button'>Delete</button> `;
     todoListHTML+=html;
}
document.querySelector('.items').innerHTML=todoListHTML;
}

function addTodo(){
    const nameElement=document.querySelector(".input-box")
    const name=nameElement.value;
    const dateElement=document.querySelector(".date")
    const date=dateElement.value;
    todoList.push({
        name,date
    });
    console.log(todoList)
    nameElement.value='';
    renderTodoList();
}

