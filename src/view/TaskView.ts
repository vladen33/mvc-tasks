import { EventBroker } from '../events/EventBroker';

export class TaskView {
  private taskInput: HTMLInputElement;
  private addTaskBtn: HTMLButtonElement;
  private taskList: HTMLUListElement;

  constructor(
    private controller: any,
    private eventBroker: EventBroker
  ) {
    this.taskInput = document.getElementById('taskInput') as HTMLInputElement;
    this.addTaskBtn = document.getElementById('addTaskBtn') as HTMLButtonElement;
    this.taskList = document.getElementById('taskList') as HTMLUListElement;

    this.addEventListeners();
    this.subscribeToEvents();
  }

  private addEventListeners(): void {
    this.addTaskBtn.addEventListener('click', () => {
      const title = this.taskInput.value.trim();
      if (title) {
        this.controller.addTask(title);
        this.taskInput.value = '';
      }
    });

    this.taskList.addEventListener('change', (event) => {
      const target = event.target as HTMLInputElement;
      if (target.classList.contains('toggle')) {
        const id = parseInt(target.dataset.id || '0');
        this.controller.toggleTaskStatus(id);
      }
    });

    this.taskList.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('delete')) {
        const id = parseInt(target.dataset.id || '0');
        this.controller.deleteTask(id);
      }
    });
  }

  private subscribeToEvents(): void {
    this.eventBroker.on('update', (tasks: any[]) => {
      this.render(tasks);
    });
  }

  public render(tasks: any[]): void {
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