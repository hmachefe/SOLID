// Simulating an interface with a class in JavaScript
class IAccount {
    calculateInterest(account) {
        throw new Error("Method 'calculateInterest()' must be implemented.");
    }
}


class SavingAccount extends IAccount {
    calculateInterest(account) {
        return account.balance * 0.3;
    }
}

class OtherAccount extends IAccount {
    calculateInterest(account) {
        return account.balance * 0.5;
    }
}


class Account {
    constructor(name, address, balance) {
        this._name = name;
        this._address = address;
        this._balance = balance;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get address() {
        return this._address;
    }

    set address(address) {
        this._address = address;
    }

    get balance() {
        return this._balance;
    }

    set balance(balance) {
        this._balance = balance;
    }
}

// Example usage:
const account = new Account('John Doe', '123 Main St', 1000);
const savingAccount = new SavingAccount();
const otherAccount = new OtherAccount();

console.log(savingAccount.calculateInterest(account)); // Outputs: 300
console.log(otherAccount.calculateInterest(account)); // Outputs: 500
