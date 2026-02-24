document.addEventListener('DOMContentLoaded', () => {

    const remove = document.getElementById('delete')
    const todo = document.getElementById('todo');
    const addbtn = document.getElementById('addbtn');
    const todoitem = document.getElementById('listcontainer')
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((tasks) => render(tasks));
    addbtn.addEventListener('click', () => {
        const value = todo.value.trim();
        if (value === "") return;
        const newTask = {
            id: Date.now(),
            text: value,
            completed: false,

        };
        tasks.push(newTask);
        saveTasks();
        todo.value = "";
        console.log(tasks);
    })
    function render(tasks) {
        const li = document.createElement('li');
        li.setAttribute("data-id", tasks.id);
        if (tasks.completed) li.classList.add("completed");
        li.innerHTML = `
    <span>${tasks.text}</span>
    <button>Delete</button>`
        li.addEventListener('click', (e) => {
            if (e.target.tagName === 'button') return;
            tasks.completed = !tasks.completed;
            li.classList.toggle('completed');
            saveTasks();
        })
        todoitem.appendChild(li);
    }
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

})