export class EventBroker {
    handlers = new Map();
    // Подписка на событие
    on(event, handler) {
        if (!this.handlers.has(event)) {
            this.handlers.set(event, []);
        }
        this.handlers.get(event)?.push(handler);
    }
    // Отписка от события
    off(event, handler) {
        const handlers = this.handlers.get(event);
        if (handlers) {
            this.handlers.set(event, handlers.filter((h) => h !== handler));
        }
    }
    // Вызов события
    trigger(event, ...args) {
        const handlers = this.handlers.get(event);
        if (handlers) {
            handlers.forEach((handler) => handler(...args));
        }
    }
}
//# sourceMappingURL=EventBroker.js.map