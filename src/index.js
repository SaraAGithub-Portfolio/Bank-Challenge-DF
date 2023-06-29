import Account from "./account.js";
import StatementPrinter from "./statementPrinter.js";
import Transaction from "./transaction.js";


const account1 = new Account();

const tran1 = new Transaction('14/01/2012', null, 500.00, 2500.00);
const tran2 = new Transaction('13/01/2012', 2000.00, null, 3000.00);
const tran3 = new Transaction('10/01/2012', 1000.00, null, 1000.00);
const tran4 = new Transaction('09/01/2012', null, null, -1.00);

account1.withdraw(tran1);
account1.deposit(tran2);
account1.deposit(tran3);
account1.deposit(tran4);

console.log('date       || credit  || debit  || balance');

const transactions = account1.getTransactions();

StatementPrinter.printArray(transactions);





