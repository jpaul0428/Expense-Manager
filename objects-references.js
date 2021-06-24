let myAccount = {
    name: `Jacob Paul`,
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    return {
        expense: account.expenses += amount
    }
}
let addIncome = function(account, amount){
    return {
        income: account.income += amount
    }
}
let resetAccount = function (account) {
    return {
        resetExpenses: account.expenses = 0,
        resetIncome: account.income = 0

    }
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount));
resetAccount(myAccount)
console.log(getAccountSummary(myAccount));
///////////
