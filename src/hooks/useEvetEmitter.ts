type Listener<T = any> = (payload: T) => void;

class useEvetEmitter<Events extends Record<string, any>> {
  private events: { [K in keyof Events]?: Listener<Events[K]>[] } = {};

  on<K extends keyof Events>(event: K, listener: Listener<Events[K]>): void {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event]!.push(listener);
  }

  off<K extends keyof Events>(
    event: K,
    listenerToRemove: Listener<Events[K]>
  ): void {
    if (!this.events[event]) return;

    this.events[event] = this.events[event]!.filter(
      (listener) => listener !== listenerToRemove
    );
  }

  emit<K extends keyof Events>(event: K, payload: Events[K]): void {
    const listeners = this.events[event];
    if (listeners) {
      listeners.forEach((listener) => listener(payload));
    }
  }
}

interface AppEvents {
  hideTabBar: boolean;
}

export default new useEvetEmitter<AppEvents>();
