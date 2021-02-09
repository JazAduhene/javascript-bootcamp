let MyAccount = {
    name: 'Jaz Aduhene',
    expenses: 0,
    income: 25000
}

let addExpense = function (account, foodExpense, clothingExpense) {  // Function adds 2000 for foodExpense + 5000 for the clothingExpense to the overall expense
    account.expenses = account.expenses + foodExpense; // Adds 2000 for foodExpense 
    account.expenses = account.expenses + clothingExpense; // Adds 5000 for the clothingExpense
}

let myDeduction = function (account) { // Function deducts total expenses from the income (income - expenses)
    account.income = account.income - account.expenses;
}

addExpense(MyAccount, 2000, 6000); // Adds 2000  + 6000, total expense to the expenses 
myDeduction(MyAccount, addExpense); // Deducts total of 7000 from the income as money spent from food and clothing expense
console.log(MyAccount);
