export class TaskController {
    model;
    constructor(model) {
        this.model = model;
    }
    // Добавление задачи
    addTask(title) {
        this.model.addTask(title);
    }
    // Переключение статуса задачи
    toggleTaskStatus(id) {
        this.model.toggleTaskStatus(id);
    }
    // Удаление задачи
    deleteTask(id) {
        this.model.deleteTask(id);
    }
    // Получение всех задач
    getTasks() {
        return this.model.getTasks();
    }
}
//# sourceMappingURL=TaskController.js.map