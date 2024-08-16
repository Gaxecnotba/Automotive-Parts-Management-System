# Automotive-Parts-Management-System

## Overview

The **Automotive Parts Management System** is a simple inventory management system designed to manage automotive parts. It utilizes a custom Linked List implementation to manage the parts inventory, allowing users to add, update, remove, and search for parts within the system.

## Features

## Linked List Implementation

The Linked List implementation in this system provides the following methods:

1. **prepend(value)**

   - **Description**: Adds a new node with the given value to the beginning of the list.
   - **Usage**:
     ```javascript
     inventory.prepend(new Part("Brake Pad", "Brakes", 25.99, 100));
     ```

2. **pop()**

   - **Description**: Removes the last node from the list.
   - **Usage**:
     ```javascript
     inventory.pop();
     ```

3. **removeAt(index)**

   - **Description**: Removes the node at the specified index in the list.
   - **Parameters**:
     - `index`: The position of the node to be removed (0-based index).
   - **Usage**:
     ```javascript
     inventory.removeAt(2);
     ```

4. **insertAt(index, value)**

   - **Description**: Inserts a new node with the given value at the specified index in the list.
   - **Parameters**:
     - `index`: The position at which the new node should be inserted (0-based index).
     - `value`: The value to be inserted.
   - **Usage**:
     ```javascript
     inventory.insertAt(1, new Part("Shock Absorber", "Suspension", 45.0, 30));
     ```

# Installation

1. Clone the repository:

git clone https://github.com/RichArdila/Automotive-Parts-Management-System.git

2. Navigate to the project directory:

cd Automotive-Parts-Management-System

3. Install any required dependencies:

npm install

# Running the Application

In the terminal run: node Inventory.js
