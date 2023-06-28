import Account from "./account.js";
import Transaction from "./transaction.js";

const account = new Account();

try {
    const transactions = {
        getDate: () => '11/11/2011',
        getCredit: () => 100,
        getDebit: () => 0
    };
    account.deposit(transactions);
} catch (error) {
    console.log(error);
    console.log(`Deposit failed: ${error.message}`);
}

try {
    const transactions = {
        getDate: () => '11/11/2011',
        getCredit: () => 100,
        getDebit: () => NaN
    };

    account.withdraw(transactions);
} catch (error) {
    console.log(error);
    console.log(`Withdraw failed: ${error.message}`);
}
try {
    const tran1 = new Transaction('14/01/2012', null, 100.00, 200.00);
    account.withdraw(tran1);
} catch (error) {
    console.log(error);
    console.log(`Withdraw failed: ${error.message}`)
}
try {
    const tran2 = new Transaction('13/01/2012', 100.00, null, 100.00);
    account.deposit(tran2);
} catch (error) {
    console.log(error);
    console.log(`Deposit failed: ${error.message}`);
}

console.log(account.getBalance());
console.log(account.getTransactions());
