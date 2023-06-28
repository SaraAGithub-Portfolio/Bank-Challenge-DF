import StatementPrinter from "../../src/statementPrinter.js";
class MockTransaction {
    date;
    credit;
    debit;
    balance;

    constructor(date = '', credit = 0, debit = 0, balance = 0) {
        this.date = date;
        this.credit = credit;
        this.debit = debit;
        this.balance = balance;
    }

    getDate() {
        return this.date;
    };

    getCredit() {
        return this.credit;
    };

    getDebit() {
        return this.debit;
    }
    getBalance() {
        return this.balance;
    }
}
describe('Statement Printer tests', () => {
    let logSpy;
    let transactionsArray;

    beforeEach(() => {
        logSpy = spyOn(console, 'log');
        transactionsArray = [
            new MockTransaction('11/01/2012', 0, 50, 50),
            new MockTransaction('11/11/2011', 50, 0, 100),
            new MockTransaction('11/11/2011', 50, 0, 50),
        ];
    });
    it('should call on console.log the correct number of times', () => {
        StatementPrinter.printArray(transactionsArray);
        expect(logSpy).toHaveBeenCalledTimes(transactionsArray.length);
    });
    it('should call console.log with the correct arguments', () => {

        transactionsArray.forEach((transaction) => {

            StatementPrinter.printArray(transactionsArray);
            const date = transaction.getDate();
            const credit = transaction.getCredit() !== null ? transaction.getCredit().toFixed(2) : '';
            const debit = transaction.getDebit() !== null ? transaction.getDebit().toFixed(2) : '';
            const balance = transaction.getBalance().toFixed(2);
            expect(logSpy).toHaveBeenCalledWith(`${date} || ${credit.padEnd(7)} || ${debit.padEnd(6)} || ${balance}`);
        });
    });
});
