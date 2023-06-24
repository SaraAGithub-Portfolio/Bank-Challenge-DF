class StatementPrinter {
    static print(transactionArray) {
        const statementHeader = 'date || deposit || withdrawal || balance \n';
        const rows = transactionArray.map(transaction => transaction.display());
        console.log(statementHeader + rows.join('\n'));
    }
}
export default StatementPrinter; 