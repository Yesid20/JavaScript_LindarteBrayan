class BankAccount {
    constructor(accountNumber, balance) {
      this._accountNumber = accountNumber;
      this._balance = balance;
    }
  
    get accountNumber() {
      return this._accountNumber;
    }
  
    set accountNumber(value) {
      this._accountNumber = value;
    }
  
    get balance() {
      return this._balance;
    }
  
    set balance(value) {
      this._balance = value;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited ${amount} - New balance: ${this.balance}`);
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Insufficient funds");
      } else {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} - New balance: ${this.balance}`);
      }
    }
  }
  
  const account1 = new BankAccount("123456", 1000);
  const account2 = new BankAccount("789012", 500);
  
  account1.deposit(500);
  account1.withdraw(200);
  
  account2.deposit(1000);
  account2.withdraw(700);
  