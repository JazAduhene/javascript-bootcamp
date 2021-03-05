const account = {
  name: 'Jaz Aduhene',
  expenses: [],
  income: [],
  // addExpense method, value is equal to a function, takes 2 arguments, description and amount
  addExpense: function (description, amount) {
    // Used to access the array. Use push to add an item to the array
    this.expenses.push({
      // Description and amount property within the object. Set each property equal to the amount argument value
      description: description,
      amount: amount,
    });
  },
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount,
    });
  },
  // Added another function that doesn't take any argument, its job is to calculate up all expenses, then print a summary
  getAccountSummary: function () {
    // Total expense that starts of at 0
    let totalExpenses = 0;
    let totalIncome = 0;
    let balance = 0;

    // Parses in a call back function, which gives access to an individual item (expense)
    this.expenses.forEach(function (expense) {
      // Using the amount property to increment the value of 0 to the expense that is parsed in
      totalExpenses = totalExpenses + expense.amount;
    });

    // Parses in a call back function, which gives access to an individual item (expense)
    this.income.forEach(function (income) {
      totalIncome = totalIncome + income.amount;
    });

    // Calculating the balance
    balance = totalIncome - totalExpenses;

    // Template string that prints name assigned to the account and the amount in total expenses in a sentence, depending on value parsed in.
    return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses`;
  },
};

// Adds an expense to the account, assigning a description and a value
account.addExpense('Rent', 950);
// Adds an expense to the account, assigning a description and a value
account.addExpense('Coffee', 2);
// Adds income to the account, assigning a description and a value
account.addIncome('Work', 1000);
// Prints account summary, the template string adding the rent and coffee expenses together
console.log(account.getAccountSummary());
