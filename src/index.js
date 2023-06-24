import Account from "./account.js";
import StatementPrinter from "./statementPrinter.js";
import Transaction from "./transaction.js";

const transactions = [
    new Transaction('10/01/2012', 1000, null, 1000)
];
const account = new Account();
transactions.forEach(transaction => account.addTransaction(transaction));
StatementPrinter.print(account.getTransactions());
