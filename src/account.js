class Account {
    _balance = 0;
    _transactions = [];
    constructor() {
        this._balance = 0;
        this._transactions = [];
    }
    getBalance() {
        return this._balance;
    }
    isANumber(amount) {
        return typeof amount === 'number';
    }
    deposit(amount) {
        if (!this.isANumber(amount)) {
            throw new Error('This is not a number');
        }
        this._balance += amount;
    }
    isDuplicateTransaction(transaction) {
        return this._transactions.some(
            (existingTransaction) =>
                existingTransaction.date === transaction.date && existingTransaction.deposit === transaction.deposit && existingTransaction.withdrawal === transaction.withdrawal && existingTransaction.balance === transaction.balance
        );
    }
    addTransaction(transaction) {
        if (this.isDuplicateTransaction(transaction)) {
            throw new Error('Duplicate transaction');
        }
        this._transactions.push(transaction);
    }
    getTransactions() {
        return this._transactions;
    }
    printStatement(statementPrinter) {
        statementPrinter.printerStatement(this._transactions);
    }

}
export default Account;