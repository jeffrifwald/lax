import chain from '../src/chain';
import takeWhile from '../src/takeWhile';


describe('takeWhile', () => {
    it('should handle an array', () => {
        let xs = [1, 2, 2, 3, 1];
        let result = chain(xs).takeWhile(x => x < 3).toArray();

        assert.deepEqual(result, [1, 2, 2]);
    });

    it('should handle a string', () => {
        let xs = 'abcdabcd';
        let result = chain(xs).takeWhile(x => x !== 'c').toString();

        assert.equal(result, 'ab');
    });

    it('should handle a map', () => {
        let xs = new Map([[1, 1], [2, 2], ['2', 2], [3,3], [1, 1]]);
        let result = takeWhile(xs, x => x[1] < 3);

        assert.deepEqual(Array.from(result), [[1, 1], [2, 2], ['2', 2]]);
    });

    it('should handle a set', () => {
        let xs = new Set([1, 2, 2, 3, 1]);
        let result = takeWhile(xs, x => x < 3);

        assert.deepEqual(Array.from(result), [1, 2]);
    });

    it('should work unchained', () => {
        let xs = [1, 2, 2, 3, 1];
        let result = takeWhile(xs, x => x < 3);

        assert.deepEqual(Array.from(result), [1, 2, 2]);
    });

    it('should lazily pass the correct arguments', () => {
        let xs = [1, 2, 3, 4];
        let thisArg = {};
        let values = [];
        let indices = [];
        let arrays = [];
        let thisArgs = [];
        let result = chain(xs).takeWhile(function(x, i, xs) {
            values.push(x);
            indices.push(i);
            arrays.push(xs);
            thisArgs.push(this);

            return x < 5;
        }, thisArg);

        assert.deepEqual(values, []);
        assert.deepEqual(indices, []);
        assert.deepEqual(arrays, []);
        assert.deepEqual(thisArgs, []);
        assert.deepEqual(result.toArray(), [1, 2, 3, 4]);
        assert.deepEqual(values, [1, 2, 3, 4]);
        assert.deepEqual(indices, [0, 1, 2, 3]);
        assert.deepEqual(arrays, [xs, xs, xs, xs]);
        assert.deepEqual(thisArgs, [thisArg, thisArg, thisArg, thisArg]);
    });
});
