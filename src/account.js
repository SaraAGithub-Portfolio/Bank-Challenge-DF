class Account {
    #accountBalance;
    #transactionArray = [];

    constructor(initialBalance = 0, transactions = []) {
        this.#accountBalance = initialBalance;
        this.#transactionArray = transactions;
    }
    hasAccount() {
        return true;
    }
    getBalance() {
        return this.#accountBalance;
    }
    getTransactions() {
        return this.#transactionArray;
    }
    withdraw(transactions) {
        const date = transactions.getDate();
        const credit = transactions.getDeposit();
        const debit = transactions.getWithdraw();
        if (isNaN(debit)) {
            throw new Error('Invalid input: withdraw amount is not a number')
        }
        this.#accountBalance -= debit;
        return this.#transactionArray.push(transactions)
    };
    deposit(transactions) {
        const date = transactions.getDate();
        const credit = transactions.getDeposit();
        const debit = transactions.getWithdraw();
        if (isNaN(credit)) {
            throw Error('Invalid input: deposit amount is not a number');
        }
        this.#accountBalance += credit;
        return this.#transactionArray.push(transactions)
    }
}
export default Account;