const LinkedList = require("./LinkedList");
const Part = require("./Part");

const inventory = new LinkedList();

inventory.prepend(new Part("Brake Pad", "Brakes", 25.99, 100));
inventory.prepend(new Part("Oil Filter", "Engine", 9.99, 50));
inventory.removeAt(0);
inventory.insertAt(1, new Part("Shock Absorber", "Suspension", 45.0, 30));

console.log(JSON.stringify(inventory, null, 2));
