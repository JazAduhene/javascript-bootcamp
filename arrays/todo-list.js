const todoList = [
  {
    text: 'Prey',
    completed: true,
  },
  {
    text: 'Meditate',
    completed: true,
  },
  {
    text: 'Watch Movie',
    completed: false,
  },
  {
    text: 'Read Book',
    completed: false,
  },
  {
    text: 'Web Dev',
    completed: true,
  },
];

/*
 * NOTE: Convert array to array of objects -> text, completed
 * NOTE: Created function to remove an item of todo list by text value
 */

const deleteTodo = function (todoList, todoText) {
  const index = todoList.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });
  // Remove item at index 1
  if (index > -1) {
    todoList.splice(index, 1);
  }
};

// Function that takes an argument(todoList), the goal is to return a new filtered array
const getThingsToDo = function (todoList) {
  // Filter method creates a new array returning subset of all todoList items, parse function into filter method and setup function argument to get access to individual todoList item(todo) and index
  return todoList.filter(function (todo) {
    // Returns todoList items that have a completed value of true
    return todo.completed === true;
  });
};

// Challenge area

// Function to sort todoList, equals a function that takes in todoList
const sortTodoList = function (todoList) {
  // Calling todoList, using a sort method assigned to a function that allows specified order to sort things. Two arguments a and b.
  todoList.sort(function (a, b) {
    // Subtracts a from b, sorts the completed items in array in ascending order. Sorts the items in the todo list that have false value first and the true after
    return a.completed - b.completed;
  });
};

sortTodoList(todoList);
console.log(todoList);

// deleteTodo(todoList, 'Watch Movie');
// console.log(todoList);

// Call to dump output to screen, calling getThingsToDo function and take the todoList in as function argument
console.log(getThingsToDo(todoList));
