import Account from "../../src/account.js";

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

describe('Account Tests', () => {
    let testAccount;

    beforeEach(() => {
        testAccount = new Account();
    });

    describe('Account instantiation test', () => {
        it('should report true for hasAccount', () => {
            expect(testAccount.hasAccount()).toBe(true);
        });
    });

    describe('Deposit Tests', () => {
        it('should add 100 to the balance', () => {
            const mockTransactionDeposit = new MockTransaction('11/11/2011', 100, 0);

            testAccount.deposit(mockTransactionDeposit);

            expect(testAccount.getBalance()).toEqual(100);
        });
        it('should throw a NaN error', () => {
            const mockTransactionNaN = new MockTransaction('11/11/2011', NaN, 0);
            expect(() => testAccount.deposit(mockTransactionNaN)).toThrowError('Invalid Input: Not a number');
        });
        it('should throw an error when encountering a negative number', () => {
            const mockTransactionNegative = new MockTransaction('11/11/2011', -10, 0);
            expect(() => { testAccount.deposit(mockTransactionNegative) }).toThrowError('Invalid Input: cannot be negative number');
        });
    });

    describe('Withdraw Tests', () => {
        it('should remove 50 from the balance', () => {
            const mockTransactionDeposit = new MockTransaction('11/11/2011', 100, 0);
            const mockTransactionWithdraw = new MockTransaction('11/11/2011', 0, 50);

            testAccount.deposit(mockTransactionDeposit);
            testAccount.withdraw(mockTransactionWithdraw);

            expect(testAccount.getBalance()).toEqual(50);
        });
        it('should throw a NaN error', () => {
            const mockTransactionNaN = new MockTransaction('11/11/2011', 0, NaN);
            expect(() => testAccount.withdraw(mockTransactionNaN)).toThrowError('Invalid Input: Not a number');
        });
        it('should throw an error when encountering a negative number', () => {
            const mockTransactionNegative = new MockTransaction('11/11/2011', 0, -10);
            expect(() => testAccount.withdraw(mockTransactionNegative)).toThrowError('Invalid Input: cannot be negative number');
        });

        describe('Account Array Transactions', () => {
            it('should add 2 transactions to the array', () => {
                const mockTransactionDeposit = new MockTransaction('11/11/2011', 100, 0);
                const mockTransactionWithdraw = new MockTransaction('11/11/2011', 0, 50);

                testAccount.deposit(mockTransactionDeposit);
                testAccount.withdraw(mockTransactionWithdraw);

                expect(testAccount.getTransactions().length).toBe(2);
            });
        });
    });
});
