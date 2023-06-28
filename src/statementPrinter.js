
class StatementPrinter {
    static printArray(transactions) {
        transactions.forEach(transaction => {
            const date = transaction.getDate();
            const credit = transaction.getCredit() !== null ? transaction.getCredit().toFixed(2) : '';
            const debit = transaction.getDebit() !== null ? transaction.getDebit().toFixed(2) : '';
            const balance = transaction.getBalance().toFixed(2);
            console.log(`${date} || ${credit.padEnd(7)} || ${debit.padEnd(6)} || ${balance}`);

        });
    }
}

export default StatementPrinter; 