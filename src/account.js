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
    withdraw(transactions) {
        const date = transactions.getDate();
        const credit = transactions.getCredit();
        const debit = transactions.getDebit();
        if (isNaN(debit)) {
            throw new Error('Invalid input: withdraw amount is not a number')
        }
        this.#accountBalance -= debit;
        return this.#transactionsArray.push(transactions)
    };
    deposit(transactions) {
        const date = transactions.getDate();
        const credit = transactions.getCredit();
        const debit = transactions.getDebit();
        if (isNaN(credit)) {
            throw Error('Invalid input: deposit amount is not a number');
        }
        this.#accountBalance += credit;
        return this.#transactionsArray.push(transactions)
    }
}
export default Account;