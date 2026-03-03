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
        render(newTask);
        todo.value = "";
        console.log(tasks);
    })
    function render(task) {
        const li = document.createElement('li');
        li.setAttribute("data-id", tasks.id);
        if (task.completed) li.classList.add("completed");
        li.innerHTML = `
    <span>${task.text}</span>
    <button>Delete</button>`
        li.addEventListener('click', (e) => {
            if (e.target.tagName === 'button') return;
            task.completed = !task.completed;
            li.classList.toggle('completed');
            saveTasks();
        })

        li.querySelector('button').addEventListener('click', function (e) {
            e.stopPropagation();//prevent toggle from firing
            tasks = tasks.filter(t => t.id !== task.id);
            li.remove();
            saveTasks();
        })
        todoitem.appendChild(li);
    }
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

})