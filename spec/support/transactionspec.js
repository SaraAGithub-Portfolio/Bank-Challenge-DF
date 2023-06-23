import Transaction from "../../src/transaction.js";

describe('Transaction tests', () => {
    let testTransaction;
    beforeEach(() => {
        testTransaction = new Transaction('10/01/2012', 1000, null, 1000);
    });
    it('should create a transaction with valid data', () => {
        expect(testTransaction).toBeInstanceOf(Transaction);
        expect(testTransaction._date).toBe('10/01/2012');
        expect(testTransaction._deposit).toBe(1000);
        expect(testTransaction._withdrawal).toBeNull();
        expect(testTransaction._balance).toBe(1000);
    });
    it('should throw an error for an invalid input', () => {
        expect(() => {
            new Transaction(null, 1000, null, 1000);
        }).toThrowError(Error, 'Invalid input');
    });

    it('should determine the correct transaction type', () => {
        const depositTransaction = new Transaction('13/01/2012', 2000, null, 1000);
        expect(depositTransaction._withdrawal).toBeNull();
    });
    it('should calculate the balance correctly', () => {
        const transaction1 = new Transaction('10/01/2012', 1000, null, 1000);
        expect(transaction1._balance).toBe(1000);
    });
    it('should handle date formatting correctly', () => {
        const transaction = new Transaction('01-10-2012', 1000, null, 1000);
        expect(transaction._date).toBe('01-10-2012');
    });
    it('should have properties', () => {
        expect(testTransaction).toBeDefined();
        expect(testTransaction).toBeDefined();
        expect(testTransaction).toBeDefined();
    });
    it('should be printed correctly', () => {
        expect(testTransaction.toString()).toBe('10/01/2012 || $1000.00 ||  || 1000.00');

    });
});