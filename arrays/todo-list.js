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

// deleteTodo(todoList, 'Watch Movie');
// console.log(todoList);

// Function that takes an argument(todoList), the goal is to return a new filtered array
const getThingsToDo = function (todoList) {
  // Filter method creates a new array returning subset of all todoList items, parse function into filter method and setup function argument to get access to individual todoList item(todo) and index
  return todoList.filter(function (todo) {
    // Returns todoList items that have a completed value of true
    return todo.completed === true;
  });
};

// Call to dump output to screen, calling getThingsToDo function and take the todoList in as function argument
console.log(getThingsToDo(todoList));
