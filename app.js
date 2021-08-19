var BaseObject = require('./objects/base');
var Block = require('./objects/block');
var BlockChain = require('./objects/blockchain');
var TR = require('./objects/transaction');

var ImmutableTransaction = TR.ImmutableTransaction;

var t = TR.ImmutableTransaction('123', '234', 30);
var b = new Block();
b.addTransaction(t);

var bc = new BlockChain();
bc.addToChain(b);
console.log(bc);

function getLongestChain(chain1, chain2) {
    if (chain1.len > chain2.len) {
        return chain1
    }

    return chain2
}


function proofOfWork() {
}
