import { Task } from './Task';
import { EventBroker } from '../events/EventBroker';

export class TaskModel {
  private tasks: Task[] = [];
  private nextId: number = 1;
  public eventBroker: EventBroker;

  constructor(eventBroker: EventBroker) {
    this.eventBroker = eventBroker;
  }

  addTask(title: string): Task {
    const task = new Task(this.nextId++, title);
    this.tasks.push(task);
    this.notifyUpdate();
    return task;
  }

  getTasks(): Task[] {
    return [...this.tasks];
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  toggleTaskStatus(id: number): void {
    const task = this.getTaskById(id);
    if (task) {
      task.completed = !task.completed;
      this.notifyUpdate();
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.notifyUpdate();
  }

  private notifyUpdate(): void {
    this.eventBroker.trigger('update', this.tasks);
  }
}