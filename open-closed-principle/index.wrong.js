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

    calculateInterest(accountType) {
        if (accountType === 'Savings') {
            return this.balance * 0.3;
        } else {
            return this.balance * 0.5;
        } // inserting one more else if will violate the OCP 
        // because modifying the class rather than extending it
    }

}