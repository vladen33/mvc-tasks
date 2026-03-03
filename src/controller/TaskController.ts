// TaskController.ts
import { TaskModel } from '../model/TaskModel';

export interface ITaskController {
  addTask(title: string): void;
  toggleTaskStatus(id: number): void;
  deleteTask(id: number): void;
  getTasks(): any[];
}

export class TaskController implements ITaskController {
  private model: TaskModel;

  constructor(model: TaskModel) {
    this.model = model;
  }

  // Добавление задачи
  addTask(title: string): void {
    this.model.addTask(title);
  }

  // Переключение статуса задачи
  toggleTaskStatus(id: number): void {
    this.model.toggleTaskStatus(id);
  }

  // Удаление задачи
  deleteTask(id: number): void {
    this.model.deleteTask(id);
  }

  // Получение всех задач
  getTasks(): any[] {
    return this.model.getTasks();
  }
}
