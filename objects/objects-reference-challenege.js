let myAccount = {
  name: 'Jaz Aduhene',
  expenses: 0,
  income: 0,
};

let addExpense = function (account, randomExpense) {
  // Function adds expense to expenses in a account
  account.expenses = account.expenses + randomExpense;
};

let addIncome = function (account, income) {
  // Function adds income to income in account
  account.income = account.income + income;
};

let resetAccount = function (account) {
  // Function resets account to 0
  account.income = 0;
  account.expenses = 0;
};

// Function deducts total expenses from the income (income - expenses)
let getAccountSummary = function (account) {
  // Cannot define MyAccount.income with 2 different values at the same time, variable was created to output account income after expenses
  let balance = account.income - account.expenses;
  return `Account for ${myAccount.name} has $${balance}. $${myAccount.income} in income and $${myAccount.expenses} in expenses.`;
};

// Adds amount to income
addIncome(myAccount, 10000);
// Adds expense to the account
addExpense(myAccount, 500);
// Adds another expense to the account
addExpense(myAccount, 500);
// Outputs template string, name, balance income and expenses
console.log(getAccountSummary(myAccount));
// Parses reset account to 0 function
resetAccount(myAccount);
// Outputs account summary after it has been set to 0
console.log(getAccountSummary(myAccount));
