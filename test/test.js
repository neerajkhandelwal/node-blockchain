// const assert = require('assert');
const BaseObject = require('./../objects/base');
// const BlockChain = require('./../objects/blockchain');

// const sinon = require('sinon')
const chai = require('chai');

// beforeEach(function () {
//   this.sandbox = sinon.sandbox.create()
// })
//
// afterEach(function () {
//   this.sandbox.restore()
// })

// chai.assert.typeOf(BaseObject, 'string');
// chai.expect(BaseObject).to.be.a('string');
describe('BaseObject module', function() {
    it('constructor', function () {
        var bo = new BaseObject();
        chai.assert.instanceOf(bo, BaseObject, 'bo is instance of BaseObject');
        chai.assert.typeOf(bo, 'object', 'bo is of type Object');
        // chai.expect(bo).to.be.a('string');
    });
});
