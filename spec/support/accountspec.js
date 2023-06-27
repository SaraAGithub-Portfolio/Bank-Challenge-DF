import Account from "../../src/account.js";

class MockTransaction {
    date;
    deposit;
    withdraw;

    constructor(date = '', deposit = 0, withdraw = 0) {
        this.date = date;
        this.deposit = deposit;
        this.withdraw = withdraw;
    }

    getDate() {
        return this.date;
    };

    getDeposit() {
        return this.deposit;
    };

    getWithdraw() {
        return this.withdraw;
    };
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
    });

    describe('Withdraw Tests', () => {
        it('should remove 50 from the balance', () => {
            const mockTransactionDeposit = new MockTransaction('11/11/2011', 100, 0);
            const mockTransactionWithdraw = new MockTransaction('11/11/2011', 0, 50);

            testAccount.deposit(mockTransactionDeposit);
            testAccount.withdraw(mockTransactionWithdraw);

            expect(testAccount.getBalance()).toEqual(50);
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
