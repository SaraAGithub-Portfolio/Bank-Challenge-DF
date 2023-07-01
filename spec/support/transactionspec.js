import Transaction from "../../src/transaction.js"

describe('Transaction tests', () => {
    let transaction;
    beforeEach(() => {
        transaction = new Transaction('11/11/2011', 100, 50, 50);
    });
    it('should have the correct date', () => {
        expect(transaction.getDate()).toEqual('11/11/2011');
    });
    it('should call the getDate method', () => {
        spyOn(transaction, 'getDate');
        transaction.getDate();
        expect(transaction.getDate).toHaveBeenCalledWith();
    });
    it('should set the current date as default if no date is provided', () => {
        const currentDate = new Date().toLocaleDateString();
        const transactionWithoutDate = new Transaction();
        expect(transactionWithoutDate.getDate()).toEqual(currentDate);
    });
    it('should have the correct debit amount', () => {
        expect(transaction.getDebit()).toEqual(50);
    });
    it('should call the getDebit method', () => {
        spyOn(transaction, 'getDebit');
        transaction.getDebit();
        expect(transaction.getDebit).toHaveBeenCalledWith();
    });
    it('should have the correct credit amount', () => {
        expect(transaction.getCredit()).toEqual(100)
    });
    it('should call the getCredit method', () => {
        spyOn(transaction, 'getCredit');
        transaction.getCredit();
        expect(transaction.getCredit).toHaveBeenCalledWith();
    });
    it('should have the correct balance', () => {
        expect(transaction.getBalance()).toEqual(50);
    });
    it('should call on the getBalance method', () => {
        spyOn(transaction, 'getBalance');
        transaction.getBalance();
        expect(transaction.getBalance).toHaveBeenCalledWith();
    });
});
