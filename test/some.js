import chain from '../src/chain';
import some from '../src/some';


describe('some', () => {
    it('should handle a true case', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).some(x => x === 3);

        assert.isTrue(result);
    });

    it('should handle a false case', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).some(x => x > 4);

        assert.isFalse(result);
    });

    it('should work unchained', () => {
        let xs = [1, 2, 3, 4];
        let result = some(xs, x => x === 3);

        assert.isTrue(result);
    });

    it('should exit early', () => {
        let xs = [1, 2, 3, 4];
        let callCount = 0;
        let result = chain(xs).some(x => {
            callCount += 1;

            return x === 2;
        });

        assert.isTrue(result);
        assert.equal(callCount, 2);
    });

    it('should pass the correct arguments', () => {
        let xs = [1, 2, 3, 4];
        let thisArg = {};
        let values = [];
        let indices = [];
        let arrays = [];
        let thisArgs = [];
        let result = chain(xs).some(function(x, i, xs) {
            values.push(x);
            indices.push(i);
            arrays.push(xs);
            thisArgs.push(this);

            return x > 3;
        }, thisArg);

        assert.deepEqual(result, true);
        assert.deepEqual(values, [1, 2, 3, 4]);
        assert.deepEqual(indices, [0, 1, 2, 3]);
        assert.deepEqual(arrays, [xs, xs, xs, xs]);
        assert.deepEqual(thisArgs, [thisArg, thisArg, thisArg, thisArg]);
    });
});
