export interface ITask {
  id: number;
  title: string;
  completed: boolean;
}

export class Task implements ITask {
  public id: number;
  public title: string;
  public completed: boolean;
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
