class InventoryHistory {
  constructor() {
    this.history = [];
  }

  addHistory(action, part) {
    this.history.push({ action, part, date: new Date().toISOString() });
  }

  getHistory() {
    return this.history;
  }
}

module.exports = InventoryHistory;
