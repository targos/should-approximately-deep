var Assertion = require('should').Assertion;
var util = require('util');

Assertion.add('approximatelyDeep', function (other, delta, description) {

    this.params = { operator: 'to be approximately deep close to ' + util.inspect(other) + ' (±' + delta + ')', message: description };

    this.assert(this.obj instanceof Array || typeof this.obj === 'number');

    goDeeper(this.obj, other, delta, this);

});

function goDeeper(actual, expected, maxDifference, assertion) {
    if(typeof actual === 'number') {
        assertion.assert((actual === expected) || (Math.abs(actual - expected) <= maxDifference));
    }
    var l = actual.length;
    assertion.assert(l === expected.length);
    for (var i = 0; i < l; i++) {
        goDeeper(actual[i], expected[i], maxDifference, assertion);
    }
}