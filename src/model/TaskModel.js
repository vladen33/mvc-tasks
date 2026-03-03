// TaskModel.ts
import { Task } from './Task';
export class TaskModel {
    tasks = [];
    nextId = 1;
    eventBroker;
    constructor(eventBroker) {
        this.eventBroker = eventBroker;
    }
    addTask(title) {
        const task = new Task(this.nextId++, title);
        this.tasks.push(task);
        this.notifyUpdate();
        return task;
    }
    getTasks() {
        return [...this.tasks];
    }
    getTaskById(id) {
        return this.tasks.find((task) => task.id === id);
    }
    toggleTaskStatus(id) {
        const task = this.getTaskById(id);
        if (task) {
            task.completed = !task.completed;
            this.notifyUpdate();
        }
    }
    deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.notifyUpdate();
    }
    notifyUpdate() {
        this.eventBroker.trigger('update', this.tasks);
    }
}
//# sourceMappingURL=TaskModel.js.map