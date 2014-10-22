require('../index');

describe('approximatelyDeep', function () {
    it('test numbers', function () {
        (1.5).should.be.approximatelyDeep(1.4, 0.2);
        (1).should.not.be.approximatelyDeep(1.2, 0.1);
    });
    it('test 1D array', function () {
        [1, 2, 3].should.be.approximatelyDeep([1, 2.01, 2.99], 0.1);
        [1, 2, 3].should.be.approximatelyDeep([1, 2, 3], 1e-10);
        [1, 2, 3].should.not.be.approximatelyDeep([1, 2], 0.1);
    });
    it('test 2D array', function () {
        [[1, 2, 3], [4, 5, 6]].should.be.approximatelyDeep([[1.05, 1.95, 3],[4, 4.98, 6]], 0.1);
        [[1, 2, 3]].should.not.be.approximatelyDeep([[1.05, 1.95, 3],[4, 4.98, 6]], 0.1);
    });
});