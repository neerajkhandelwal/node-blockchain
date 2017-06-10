// Transaction object is intermittent, must always be extended and not used directly.
// Make sure you override the constructor of extending object to Transaction for the
// transaction to be added to the block.
var BaseObject = require('./base');

function TransactionException(message) {
    this.name = 'TransactionException';
    this.message = message;
}


function Transaction() {
    BaseObject.call(this);
}

Transaction.prototype = Object.create(BaseObject);
Transaction.prototype.constructor = Transaction;

module.exports = Transaction;
