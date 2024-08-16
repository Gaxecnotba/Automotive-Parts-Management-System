function updatePart(inventory, index, details) {
  let current = inventory.head;
  let count = 0;
  while (current) {
    if (count === index) {
      current.value.updateDetails(details);
      return current.value;
    }
    current = current.next;
    count++;
  }
  return null;
}

module.exports = updatePart;
