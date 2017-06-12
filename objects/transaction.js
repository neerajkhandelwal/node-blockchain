// Transaction object is intermittent, must always be extended and not used directly.
// Make sure you override the constructor of extending object to Transaction for the
// transaction to be added to the block.
var BaseObject = require('./base');

const USER_HASH_LENGTH = 3;

function TransactionException(message) {
    this.name = 'TransactionException';
    this.message = message;
}


function Transaction(to, from, amount, message) {
    BaseObject.call(this);
    this.time = new Date();

    if (typeof from !== 'string' || from.length != USER_HASH_LENGTH) {
        throw new TransactionException('Exptects From to be Wallet hash');
    }
    
    if (typeof to !== 'string' || from.length != USER_HASH_LENGTH) {
        throw new TransactionException('Exptects To to be Wallet hash');
    }

    if (from == to) {
        throw new TransactionException('Cannot transfer to the same account');
    }

    if (amount <= 0 || amount % 1 !== 0) {
        throw new TransactionException('Amount have to a positive integer');
    }
    
    this.from = from;
    this.to = to;
    this.amount = amount;

    if (message !== undefined) {
        this.custom_message = message;
    }
}

Transaction.prototype = Object.create(BaseObject);
Transaction.prototype.constructor = Transaction;

Transaction = Object.seal(Transaction);

var ImmutableTransaction = function(to, from, amount, message) {
    var tr = new Transaction(to, from, amount, message);
    return Object.freeze(tr);
}

module.exports = {
    ImmutableTransaction: ImmutableTransaction,
    Transaction: Transaction
};
