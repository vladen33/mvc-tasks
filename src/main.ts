import { TaskModel } from './model/TaskModel';
import { TaskController } from './controller/TaskController';
import { TaskView } from './view/TaskView';
import { EventBroker } from './events/EventBroker';

const broker = new EventBroker();
const model = new TaskModel(broker);
const controller = new TaskController(model);
const view = new TaskView(controller, model.eventBroker);

// Инициальное отображение
view.render(model.getTasks());