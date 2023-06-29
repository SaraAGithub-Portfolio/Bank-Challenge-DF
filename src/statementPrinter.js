import chalk from "chalk";

class StatementPrinter {
    static printArray(transactions) {
        transactions.forEach((transaction) => {
            const formattedTransaction = this.formatTransaction(transaction);
            console.log(formattedTransaction);
        });
    }

    static formatTransaction(transaction) {
        const date = this.formatDate(transaction);
        const formattedCredit = this.formatCredit(transaction);
        const formattedDebit = this.formatDebit(transaction);
        const formattedBalance = this.formatBalance(transaction);

        return `${date} || ${formattedCredit.padEnd(7)} || ${formattedDebit.padEnd(6)} || ${formattedBalance}`;
    }

    static formatDate(transaction) {
        return transaction.getDate();
    }

    static formatCredit(transaction) {
        const credit = transaction.getCredit();
        return credit != null ? chalk.green(credit.toFixed(2)) : '';
    }

    static formatDebit(transaction) {
        const debit = transaction.getDebit();
        return debit !== null ? chalk.red(debit.toFixed(2)) : '';
    }

    static formatBalance(transaction) {
        const balance = transaction.getBalance().toFixed(2);
        const formattedBalance = balance > 0 ? chalk.green(balance) : chalk.red(balance);
        return formattedBalance;
    }
}
export default StatementPrinter;






