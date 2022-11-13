export const events = {
  events: {},
  on(eventName, callback) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);
  },
  off(eventName, callback) {
    if (this.events[eventName]) {
      const eveArr = this.events[eventName];
      eveArr.splice(
        eveArr.findIndex((fn) => fn === callback),
        1,
      );
    }
  },
  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => {
        callback(data);
      });
    }
  },
};
