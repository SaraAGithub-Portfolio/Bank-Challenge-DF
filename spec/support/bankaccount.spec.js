import BankAccount from "../../src/bankaccount.js";

//User Story 1
describe('Bank Account Test', () => {
    let testBankAccount;

    beforeEach(() => {
        testBankAccount = new BankAccount();
    });

    describe('Bank Account instantiation test', () => {
        it('should report true for hasAccount', () => {
            expect(testBankAccount.hasAccount()).toBe(true);
        });
    });
});