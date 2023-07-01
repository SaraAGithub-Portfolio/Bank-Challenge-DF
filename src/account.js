class Account {
    #accountBalance;
    #transactionsArray = [];

    constructor(initialBalance = 0, transaction = []) {
        this.#accountBalance = initialBalance;
        this.#transactionsArray = transaction;
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
    }
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
    calculateBalance() {
        this.#accountBalance = this.#transactionsArray.reduce((balance, transaction) => {
            return balance + transaction.getCredit() - transaction.getDebit();
        }, 0);
    }

}
export default Account;