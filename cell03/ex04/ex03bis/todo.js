function addTask(taskText) {
    const ftList = $('#ft_list');
    const newTask = $('<div class="task"></div>').text(taskText);

    newTask.on('click', function () {
        const shouldRemove = confirm("Do you really want to remove this task?");
        if (shouldRemove) {
            removeTask(newTask);
            saveTasksToCookie();
        }
    });

    ftList.prepend(newTask);
}

function removeTask(taskElement) {
    taskElement.remove();
}

function saveTasksToCookie() {
    const ftList = $('#ft_list');
    const tasks = ftList.children('.task').map(function () {
        return $(this).text();
    }).get();

    document.cookie = `tasks=${JSON.stringify(tasks)}; SameSite=None; Secure`;
}

function loadTasksFromCookie() {
    const ftList = $('#ft_list');
    const cookies = document.cookie.split(';');
    const tasksCookie = cookies.find(cookie => cookie.trim().startsWith('tasks='));

    if (tasksCookie) {
        const tasks = JSON.parse(tasksCookie.split(';')[1]);
        tasks.forEach(task => addTask(task));
    }
}

