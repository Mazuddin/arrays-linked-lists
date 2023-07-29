class CircularArray {
    constructor() {
      this.items = [];
      this.startIndex = 0;
    }
  
    // Add an item to the circular array
    addItem(item) {
      this.items.push(item);
    }
  
    // Print the circular array starting from the current start index
    printArray() {
      for (let i = 0; i < this.items.length; i++) {
        console.log(this.items[this.getActualIndex(i)]);
      }
    }
  
    // Get the item at the given index in the circular array
    getByIndex(index) {
      if (index >= 0 && index < this.items.length) {
        return this.items[this.getActualIndex(index)];
      }
      return null;
    }
  
    // Rotate the circular array by the given number of steps
    rotate(steps) {
      this.startIndex = this.getActualIndex(this.startIndex + steps);
    }
  
    // Calculate the actual index based on the current start index
    getActualIndex(index) {
      const actualIndex = (this.startIndex + index) % this.items.length;
      return actualIndex >= 0 ? actualIndex : actualIndex + this.items.length;
    }
  }
  
  // Example usage:
  let circ = new CircularArray();
  circ.addItem('harry');
  circ.addItem('hermione');
  circ.addItem('ginny');
  circ.addItem('ron');
  
  circ.printArray();
  // Output:
  // harry
  // hermione
  // ginny
  // ron
  
  console.log(circ.getByIndex(2)); // Output: ginny
  console.log(circ.getByIndex(15)); // Output: null
  
  circ.rotate(1);
  circ.printArray();
  // Output:
  // hermione
  // ginny
  // ron
  // harry
  
  console.log(circ.getByIndex(2)); // Output: ron
  
  circ.rotate(-1);
  circ.printArray();
  // Output:
  // ron
  // harry
  // hermione
  // ginny
  
  console.log(circ.getByIndex(2)); // Output: hermione
  
  circ.rotate(-17);
  console.log(circ.getByIndex(1)); // Output: harry
  
  circ.addItem('new_item');
  circ.printArray();
  // Output:
  // ron
  // harry
  // hermione
  // ginny
  // new_item
  