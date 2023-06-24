//try catch
import Account from "./account.js";

const account1 = new Account();
isDuplicateTransaction(transaction)
try {
    account1.isDuplicateTransaction(transaction)
} catch (error) {
    console.log(error);
    console.log('Duplicate transaction');
    throw error;
}
addTransaction(transaction)
try {
    account1.addTransaction(transaction)
} catch (error) {
    console.log(error);
    throw error;
}

