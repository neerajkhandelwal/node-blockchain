// Transaction object is intermittent, must always be extended and not used directly.
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
