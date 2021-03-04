let MyAccount = {
  name: 'Jaz Aduhene',
  expenses: 0,
  income: 25000,
};

// Function adds 2000 for foodExpense + 5000 for the clothingExpense to the overall expense
let addExpense = function (account, foodExpense, clothingExpense) {
  // Adds 2000 for foodExpense
  account.expenses = account.expenses + foodExpense;
  // Adds 5000 for the clothingExpense
  account.expenses = account.expenses + clothingExpense;
};

// Function deducts total expenses from the income (income - expenses)
let myDeduction = function (account) {
  account.income = account.income - account.expenses;
};

// Adds 2000  + 6000, total expense to the expenses
addExpense(MyAccount, 2000, 6000);
// Deducts total of 7000 from the income as money spent from food and clothing expense
myDeduction(MyAccount, addExpense);
console.log(MyAccount);
