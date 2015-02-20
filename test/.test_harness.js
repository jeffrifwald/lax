'use strict';

var chai = require('chai');
var mocha = require('mocha');
var sinon = require('sinon');


require('traceur').require.makeDefault();
global.chain = require('../src/chain').default;
global.assert = chai.assert;
global.stub = sinon.stub;
global.describe = mocha.describe;
global.it = mocha.it;
global.after = mocha.after;
global.afterEach = mocha.afterEach;
global.before = mocha.before;
global.beforeEach = mocha.beforeEach;
