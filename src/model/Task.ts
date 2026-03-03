// Task.ts
export interface ITask {
  id: number;
  title: string;
  completed: boolean;
}

export class Task implements ITask {
  public id: number;
  public title: string;
  public completed: boolean = false;
  constructor(
    id: number,
    title: string,
    completed: boolean = false
  ) {
    this.id = id;
    this.title = title;
    this.completed = completed
  }
}
