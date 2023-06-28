import chalk from "chalk";
class StatementPrinter {
    static printArray(transactions) {
        transactions.forEach(transaction => {
            const date = transaction.getDate();
            const credit = transaction.getCredit() !== null ? transaction.getCredit().toFixed(2) : '';
            const debit = transaction.getDebit() !== null ? transaction.getDebit().toFixed(2) : '';
            const balance = transaction.getBalance().toFixed(2);

            const formattedCredit = credit ? chalk.green(credit) : '';
            const formattedDebit = debit ? chalk.red(debit) : '';
            const formattedBalance = balance > 0 ? chalk.green(balance) : chalk.red(balance);

            console.log(`${date} || ${formattedCredit.padEnd(7)} || ${formattedDebit.padEnd(6)} || ${formattedBalance}`);

        });
    }
}

export default StatementPrinter; 