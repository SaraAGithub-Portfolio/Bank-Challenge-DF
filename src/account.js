class Account {

    _balance = 0;
    constructor() {
        this._balance = 0;
    }
    getBalance() {
        return this._balance;
    }
    isANumber(amount) {
        if (typeof amount !== 'number') {
            throw new Error('This is not a number');
        }
    }
    deposit(amount) {
        this.isANumber(amount);
        this._balance += amount;
    }
}
export default Account;