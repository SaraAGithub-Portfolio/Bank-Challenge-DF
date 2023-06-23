import Account from "../../src/account.js";
import Transaction from "../../src/transaction.js"

describe('Account Test', () => {
    let testAccount;

    beforeEach(() => {
        testAccount = new Account();
    });
    it('should test that account exists', () => {
        expect(testAccount instanceof Account).toBe(true);
    });
    describe('Test balance', () => {
        it(' should have a balance of 0 for initialization', () => {
            let expected = 0;

            expect(testAccount.getBalance()).toBe(expected);
        });
        describe('Deposit tests', () => {
            it('should increase the amount of the balance', () => {
                let amount = 100;
                testAccount.deposit(amount);
                expect(testAccount.getBalance()).toBe(amount);
            });
            it('should only accept numbers', () => {
                let amount = 'not a number';
                expect(() => { testAccount.deposit(amount) }).toThrowError('This is not a number');
            });

        });
        describe('Statement printing', () => {
            it('should print the account statement correctly', () => {
                const transactions = [
                    new Transaction('10/01/2012', 1000, null, 1000)
                ];
                const statementPrinterMock = {
                    printerStatement: () => { }
                };
                spyOn(statementPrinterMock, 'printerStatement');
                transactions.forEach(transaction => testAccount.addTransaction(transaction));
                testAccount.printStatement(statementPrinterMock);
                expect(statementPrinterMock.printerStatement).toHaveBeenCalledWith(transactions);
            });
        })

    });

});