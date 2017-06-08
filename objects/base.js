// Native objects must not be used. All the object should derive Base object if required.
// All basic BlockChain objects are already defined.
function BaseObject() {
}

BaseObject.prototype.constructor = BaseObject;

module.exports = BaseObject;
