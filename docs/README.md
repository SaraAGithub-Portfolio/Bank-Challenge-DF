# Bank Challenge 

## Description

The 'Bank Challenge' is the second challenge in the Digital Futures Software Engineering Program. This challenge allowed me to demonstrate the skills I've cultivated so far in the course. Using my skills and knowledge in TDD, Software Development Lifecycle, and OOP I designed a program that when a user makes a deposit or a withdrawal she can view her bank statement and analyze her transactions. 

How it works:
* The project consists of 3 spec files, 3 classes, and an index.js file that serves as an entry point.
* The Account class represents a bank account. It has methods to get the account balance, transaction history, perform a withdrawal and deposit.
* The Transaction class represents a single transaction. It has methods to get the transaction date, credit amount, debit amount and the balance after the transaction.
* The StatementPrinter class provides functionality to print a bank statement. It uses the static printArray method that takes an array of transactions and prints each transaction in a formatted manner and prints it to the console using console.log.
* the Index.js file serves as the entry point for the application. It creates an instance of the Account class and several instances of the Transaction class. It performs transactions by calling the withdraw and deposit methods. It prints the bank statement by calling the StatementPrinter.printArray with the transaction history of 'account1'. 
* When the user views her bank statement, she'll see that a credit/ positive balance are highlighted as green, and a debit/negative balance are highlighted as red. 


### Requirements

* Results of your code should display via the JavaScript console.  (NB: You don't need to implement a command line interface that takes user input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, credit or debit amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```


#### Standard
- [ Y ] Meets the spec
- [ Y ] Developed test-first
- [ Y ] Passes tests and code is clean and well formatted
- [ Y ] Encapsulates adding and storing Transactions in a class
- [ Y ] Encapsulates Statement formatting in a class
- [ Y ] Encapsulates Transaction data in a class

#### Extended
- [ Y ] Can you format the console output?  Credited values should be GREEN and debited values should be RED.  The balance should be GREEN if positive and RED if negative.

### Installing

```
From this repository, use git clone to clone this repo to your local machine. 
Use Jasmine to run tests and Node.js for when you want to view the printed statement.

```

### Executing Program

```
1. Make sure you are in the bank-challenge directory (cd bank-challenge).
2. To run Jasmine Tests: open an integrated terminal in the spec/support folder. In the terminal, type: npm test. You should see 22 small green dots indicating passing tests.
3. To view the printed statement: open an integrated terminal in the src/index.js file. In the terminal type: node index.js. You should see the printed statement. 

```

### Domain Models & User Stories
1. User Story: As a client, so that I can save money, I should deposit money into my account.
| Objects   | Properties                                    | Messages        | Output          |
|-----------|-----------------------------------------------|-----------------|-----------------|
| Account   | initialBalance(@Int), transactionsArray(@Array)| deposit(@Int)   | @Balance(Int)   |


2. User Story: As a client, so that I can spend money, I should withdraw money from my account.
| Objects     | Properties                                    | Messages          | Output          |
|-------------|-----------------------------------------------|-------------------|-----------------|
| Account     | initialBalance(@Int), transactionsArray(@Array)| withdraw(@Int)    | @Balance(Int)   |
| Transaction | date, credit, debit, balance                  | calculateBalance()| @Balance(Int)   |


3. User Story: As a client, so that I can view the amount in my account, I should have an account balance.
| Objects     | Properties                                    | Messages    | Output |
|-------------|-----------------------------------------------|-------------|--------|
| Account     | initialBalance(@Int), transactionsArray(@Array)| getBalance()| @Int   |
| Transaction | balance(Int)                                  | calculateBalance()| @Int   |


4. User Story: As a client, so that I can keep track of my balance, I should see the updated balance after each transaction.
| Objects          | Properties                                    | Messages                            | Output          |
|------------------|-----------------------------------------------|-------------------------------------|-----------------|
| Account          | initialBalance(@Int), transactionsArray(@Array)| withdraw(transaction),              | @Int            |
|                  |                                               | deposit(transaction),               |                 |
|                  |                                               | getTransactions(), getBalance()      | @Array          |
| Transaction      | date, credit, debit, balance                  | getDate(), getCredit(), getDebit(),  |                 |
|                  |                                               | getBalance(), calculateBalance()     |                 |
| StatementPrinter |                                               | formatTransaction(transaction),     | @Array          |
|                  |                                               | formatBalance(transaction)          | @String         |


5. User Story: As a client, so that I can view my transaction history, I should print my bank statement.
| Objects          | Properties                                    | Messages                            | Output |
|------------------|-----------------------------------------------|-------------------------------------|---------|
| Account          | initialBalance(@Int), transactionsArray(@Array)| getTransactions()                   | @Array  |
| Transaction      | date(Date), credit(Int), debit(Int), balance(Int)|                                   |         |
| StatementPrinter |                                               | formatTransaction(transaction)      | @String |



6. User Story: As a client, so that my bank account transactions are organized, transactions should be printed by the latest date.
| Objects          | Properties                                    | Messages                            | Output |
|------------------|-----------------------------------------------|-------------------------------------|---------|
| Account          | initialBalance(@Int), transactionsArray(@Array)| getTransactions()                   | @Array  |
| Transaction      | date, credit, debit, balance                  |                                     |         |
| StatementPrinter |                                               | formatTransaction(transaction)      | @String |


7. User Story: As a client, so that I can identify positive and negative transactions easily, credits in my account should be green.
| Objects          | Properties                                    | Messages                            | Output        |
|------------------|-----------------------------------------------|-------------------------------------|---------------|
| Account          | initialBalance(@Int)                           |                                     |               |
| Transaction      | date, credit                                   |                                     |               |
| StatementPrinter |                                               | formatCredit(transaction)            | @Array        |
|                  |                                               | formatBalance(transaction)           |               |

                                                                     formatBalance(transaction)

8. User Story: As a client, so that I can identify positive and negative transactions easily, debits in my account should be red.
| Objects          | Properties                                    | Messages                            | Output        |
|------------------|-----------------------------------------------|-------------------------------------|---------------|
| Account          | initialBalance(@Int)                           |                                     |               |
| Transaction      | date, credit                                   |                                     |               |
| StatementPrinter |                                               | formatDebit(transaction)             | @Array        |
|                  |                                               | formatBalance(transaction)           |               |
