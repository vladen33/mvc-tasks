// EventBroker.ts
type EventHandler = (...args: any[]) => void;

export class EventBroker {
  private handlers: Map<string, EventHandler[]> = new Map();

  // Подписка на событие
  on(event: string, handler: EventHandler): void {
    if (!this.handlers.has(event)) {
      this.handlers.set(event, []);
    }
    this.handlers.get(event)?.push(handler);
  }

  // Отписка от события
  off(event: string, handler: EventHandler): void {
    const handlers = this.handlers.get(event);
    if (handlers) {
      this.handlers.set(
        event,
        handlers.filter((h) => h !== handler)
      );
    }
  }

  // Вызов события
  trigger(event: string, ...args: any[]): void {
    const handlers = this.handlers.get(event);
    if (handlers) {
      handlers.forEach((handler) => handler(...args));
    }
  }
}