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

    getDebit() {
        return this.#debit;
    }
    getCredit() {
        return this.#credit;
    }
    getBalance() {
        return this.#balance;
    }
}
export default Transaction;