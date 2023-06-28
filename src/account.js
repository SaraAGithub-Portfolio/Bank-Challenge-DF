class Account {
    #accountBalance;
    #transactionsArray = [];

    constructor(initialBalance = 0, transactions = []) {
        this.#accountBalance = initialBalance;
        this.#transactionsArray = transactions;
    }
    hasAccount() {
        return true;
    }
    getBalance() {
        return this.#accountBalance;
    }
    getTransactions() {
        return this.#transactionsArray;
    }
    withdraw(transaction) {
        const debit = transaction.getDebit();
        if (isNaN(debit)) {
            throw new Error('Invalid Input: Not a number')
        }
        if (debit < 0) {
            throw new Error('Invalid Input: cannot be negative number')
        }
        this.#accountBalance -= debit;
        return this.#transactionsArray.push(transaction)
    };
    deposit(transaction) {
        const credit = transaction.getCredit();
        if (isNaN(credit)) {
            throw Error('Invalid Input: Not a number');
        }
        if (credit < 0) {
            throw new Error('Invalid Input: cannot be negative number')
        }
        this.#accountBalance += credit;
        return this.#transactionsArray.push(transaction)
    }
}
export default Account;