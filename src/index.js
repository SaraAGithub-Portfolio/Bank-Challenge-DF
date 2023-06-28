import Account from "./account.js";
import StatementPrinter from "./statementPrinter.js";
import Transaction from "./transaction.js";

const account = new Account();

const tran1 = new Transaction('14/01/2012', null, 500.00, 2500.00);
const tran2 = new Transaction('13/01/2012', 2000.00, null, 3000.00);
const tran3 = new Transaction('10/01/2012', 1000.00, null, 1000.00);
const tran4 = new Transaction('09/01/2012', null, null, 0.00); // added this to have a zero balance which reflects red for extended criteria

account.withdraw(tran1);
account.deposit(tran2);
account.deposit(tran3);
account.deposit(tran4);
console.log('date       || credit  || debit  || balance');

StatementPrinter.printArray(account.getTransactions());



