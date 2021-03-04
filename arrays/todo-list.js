const todoList = [
  {
    text: 'Prey',
    completed: 'true',
  },
  {
    text: 'Meditate',
    completed: 'true',
  },
  {
    text: 'Watch Movie',
    completed: 'false',
  },
  {
    text: 'Read Book',
    completed: 'false',
  },
  {
    text: 'Web Dev',
    completed: 'true',
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

deleteTodo(todoList, 'Watch Movie');
console.log(todoList);
