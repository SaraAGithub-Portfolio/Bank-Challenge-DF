class Transaction {
    #date;
    #credit;
    #debit;
    #balance;

    constructor(date = new Date().toLocaleDateString(), credit = 0, debit = 0, balance = 0) {
        this.#date = date;
        this.#credit = credit;
        this.#debit = debit;
        this.#balance = balance;
    };
    getDate() {
        return this.#date;
    }
    setDate(date) {
        this.#date = date;
    }
    getDebit() {
        return this.#debit;
    }
    setDebit(debit) {
        if (debit < 0) {
            throw new Error('Invalid Input: cannot be negative number');
        }
        this.#debit = debit;
    };
    getCredit() {
        return this.#credit;
    }
    setCredit(credit) {
        if (isNaN(credit)) {
            throw new Error('Invalid Input: must be a number');
        }
        this.#credit = credit;
    }
    getBalance() {
        return this.#balance;
    }
    setBalance(balance) {
        this.#balance = balance;
    }

}
export default Transaction;