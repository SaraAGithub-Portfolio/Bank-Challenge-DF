class Transaction {
    constructor(date, deposit, withdrawal, balance) {
        if (!date || !deposit || !balance) {
            throw new Error('Invalid input');
        }
        this._date = date;
        this._deposit = deposit;
        this._withdrawal = withdrawal;
        this._balance = balance;
    }
    get date() {
        return this._date;
    }
    get balance() {
        return this._balance;
    }
    toString() {
        return `${this._date} || $${this._deposit.toFixed(2)} || ${this._withdrawal ? this._withdrawal.toFixed(2) : ''} || ${this._balance.toFixed(2)}`;
    }
    calculateBalance() {
        return this._balance + (this._deposit || 0) - (this._withdrawal || 0);
    }
}

export default Transaction;