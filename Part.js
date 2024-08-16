class Part {
  constructor(name, category, price, quantity) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.quantity = quantity;
  }
  updateDetails({ name, category, price, quantity }) {
    if (name) this.name = name;
    if (category) this.category = category;
    if (price) this.price = price;
    if (quantity) this.quantity = quantity;
  }
}

module.exports = Part;
