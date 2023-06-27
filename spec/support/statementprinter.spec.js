import StatementPrinter from "../../src/statementPrinter.js";

describe('Statement Printer tests', () => {
    let logSpy;
    const transactionsArray = [
        { date: '11/01/2012', credit: 0, debit: 50, balance: 50 },
        { date: '11/11/2011', credit: 50, debit: 0, balance: 100 },
        { date: '11/11/2011', credit: 50, debit: 0, balance: 50 },
    ];
    beforeEach(() => {
        logSpy = spyOn(console, 'log');
    });
    it('should call on console.log the correct number of times', () => {
        StatementPrinter.printArray(transactionsArray);
        expect(logSpy).toHaveBeenCalledTimes(transactionsArray.length);
    });
    it('should call console.log with the correct arguments', () => {
        StatementPrinter.printArray(transactionsArray);
        for (let i = 0; i < transactionsArray.length; i++) {
            expect(logSpy).toHaveBeenCalledWith(transactionsArray[i]);
        }
    });
});
