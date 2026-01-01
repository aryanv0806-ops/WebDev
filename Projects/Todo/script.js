
const remove=document.getElementById('delete')
const todo = document.getElementById('todo');
const addbtn = document.getElementById('addbtn');
const todoitem= document.getElementById('listcontainer')
addbtn.addEventListener('click', () => {
    const value = todo.value;
    const li = document.createElement('li')
    li.innerText = value
    todoitem.appendChild(li);
     const del = document.createElement('button')
    del.innerText = 'Remove'
   li.appendChild(del)
    del.addEventListener('click', function () {
        li.remove();
    })
    todo.value = ''
    remove.addEventListener('click', () => {
        li.remove()
    })
})
