import StatementPrinter from "../../src/statementPrinter.js";

class MockAccount {
    #accountBalance;
    #transactionsArray = [];

    constructor(initialBalance = 0, transactions = []) {
        this.#accountBalance = initialBalance;
        this.#transactionsArray = transactions;
    }
    getBalance() {
        return this.#accountBalance;
    }
    getTransactions() {
        return this.#transactionsArray;
    }
    withdraw(transaction) {
        const debit = transaction.getDebit();
        this.#accountBalance -= debit;
        return this.#transactionsArray.push(transaction)
    }
    deposit(transaction) {
        const credit = transaction.getCredit();
        this.#accountBalance += credit;
        return this.#transactionsArray.push(transaction)
    }
}

class MockTransaction {
    date;
    credit;
    debit;
    balance;

    constructor(date = "", credit = 0, debit = 0, balance = 0) {
        this.date = date;
        this.credit = credit;
        this.debit = debit;
        this.balance = balance;
    }
    getDate() {
        return this.date;
    }
    getCredit() {
        return this.credit;
    }
    getDebit() {
        return this.debit;
    }

    getBalance() {
        return this.balance;
    }
}

describe('Statement Printer tests', () => {
    let transactionsArray;
    let testAccount;

    beforeEach(() => {
        testAccount = new MockAccount();
        transactionsArray = [
            new MockTransaction('11/01/2012', 0.00, 50.00, 0.00),
            new MockTransaction('11/11/2011', 50.00, 0.00, 50.00)
        ];
        transactionsArray.forEach((transaction) => {
            testAccount.withdraw(transaction);
            testAccount.deposit(transaction);
        });
    });

    it('should call on console.log the correct number of times', () => {
        const logSpy = spyOn(console, 'log');
        StatementPrinter.printArray(transactionsArray);
        expect(logSpy).toHaveBeenCalledTimes(transactionsArray.length);
    });

    it('should call console.log with the correct arguments', () => {
        const logSpy = spyOn(console, 'log');
        StatementPrinter.printArray(transactionsArray);

        transactionsArray.forEach((transaction) => {
            const expectedOutput = StatementPrinter.formatTransaction(transaction);
            expect(logSpy).toHaveBeenCalledWith(expectedOutput);
        });
    });
    it('should throw an error when an empty transactionArray is passed', () => {
        const emptyTransactionArray = [];
        expect(() => {
            StatementPrinter.printArray(emptyTransactionArray);
        }).toThrowError('Invalid transaction');
    });
});
