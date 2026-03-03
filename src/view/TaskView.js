export class TaskView {
    controller;
    eventBroker;
    taskInput;
    addTaskBtn;
    taskList;
    constructor(controller, eventBroker) {
        this.controller = controller;
        this.eventBroker = eventBroker;
        this.taskInput = document.getElementById('taskInput');
        this.addTaskBtn = document.getElementById('addTaskBtn');
        this.taskList = document.getElementById('taskList');
        this.addEventListeners();
        this.subscribeToEvents();
    }
    addEventListeners() {
        this.addTaskBtn.addEventListener('click', () => {
            const title = this.taskInput.value.trim();
            if (title) {
                this.controller.addTask(title);
                this.taskInput.value = '';
            }
        });
        this.taskList.addEventListener('change', (event) => {
            const target = event.target;
            if (target.classList.contains('toggle')) {
                const id = parseInt(target.dataset.id || '0');
                this.controller.toggleTaskStatus(id);
            }
        });
        this.taskList.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('delete')) {
                const id = parseInt(target.dataset.id || '0');
                this.controller.deleteTask(id);
            }
        });
    }
    subscribeToEvents() {
        this.eventBroker.on('update', (tasks) => {
            this.render(tasks);
        });
    }
    render(tasks) {
        this.taskList.innerHTML = '';
        tasks.forEach((task) => {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'toggle';
            checkbox.dataset.id = task.id.toString();
            checkbox.checked = task.completed;
            const span = document.createElement('span');
            span.textContent = task.title;
            if (task.completed) {
                span.style.textDecoration = 'line-through';
            }
            const button = document.createElement('button');
            button.textContent = 'Удалить';
            button.className = 'delete';
            button.dataset.id = task.id.toString();
            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(button);
            this.taskList.appendChild(li);
        });
    }
}
//# sourceMappingURL=TaskView.js.map