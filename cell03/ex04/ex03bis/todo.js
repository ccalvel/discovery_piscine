function addTask(taskText) {
    const ftList = document.getElementById('ft_list');
    const newTask = document.createElement('div');
    newTask.className = 'task';
    newTask.innerText = taskText;

    newTask.addEventListener('click', function() {
        const shouldRemove = confirm("Do you really want to remove this task?");
        if (shouldRemove) {
            // Llamada a la nueva función para eliminar el elemento del DOM
            removeTask(newTask);
            // Guardar la lista actualizada en la cookie
            saveTasksToCookie();
        }
    });

    ftList.insertBefore(newTask, ftList.firstChild);
}

function removeTask(taskElement) {
    const ftList = document.getElementById('ft_list');

    // Verificar si el elemento existe en el DOM
    if (ftList && taskElement) {
        // Verificar si el elemento aún existe en el DOM
        if (ftList.contains(taskElement)) {
            ftList.removeChild(taskElement);
        } else {
            console.warn("El elemento no existe en el DOM.");
        }
    } else {
        console.warn("El contenedor o el elemento son nulos o indefinidos.");
    }
}






document.addEventListener('DOMContentLoaded', function(){
    loadTasksFromCookie()
});

function openPrompt(){
    const taskTest = prompt("Enter a new Task:");
    if(taskTest != null && taskTest != ""){
        addTask(taskTest);
        saveTasksToCookie();
    }
}

function addTask(taskTest){
    const ftList = document.getElementById('ft_list');
    const newTask = document.createElement('div');
    newTask.className = 'task';
    newTask.innerText = taskTest;

    newTask.addEventListener('click', function(){
        const shouldRemove = confirm("Do you really want to remove this task?");
        if(shouldRemove){
            ftList.removeChild(newTask);
            saveTasksToCookie();
        }
    });
    ftList.insertBefore(newTask, ftList.firstChild);
}

function saveTasksToCookie(){
    const ftList =document.getElementById('ft_list');
    const tasks = Array.from(ftList.children).map(task => task.innerText);
    document.cookie = `tasks=${JSON.stringify(tasks)}; SameSite=None; Secure`
}

function loadTasksFromCookie(){
    const cookies = document.cookie.split(';');
    const tasksCookie = cookies.find(cookie => cookie.trim().startsWith('tasks='));

    console.log('tasksCookie:', tasksCookie);
    if(tasksCookie){
        const tasks =JSON.parse(tasksCookie.split('=')[1]);
        tasks.forEach(task => addTask(task));
    }
}

