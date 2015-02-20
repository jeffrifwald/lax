import reject from '../src/reject';


describe('reject', () => {
    it('should handle an array', () => {
        let xs = [1, 2, 3, 4];
        let result = reject(xs, x => x > 2);

        assert.deepEqual(Array.from(result), [1, 2]);
    });

    it('should handle a string', () => {
        let xs = 'abcd';
        let result = reject(xs, x => x === 'c');

        assert.deepEqual(Array.from(result), ['a', 'b', 'd']);
    });

    it('should handle a map', () => {
        let xs = new Map([[1, 1], [2, 2], [3,3], [4, 4]]);
        let result = reject(xs, x => x[0] > 2);

        assert.deepEqual(Array.from(result), [[1, 1], [2, 2]]);
    });

    it('should handle a set', () => {
        let xs = new Set([1, 2, 3, 4]);
        let result = reject(xs, x => x > 2);

        assert.deepEqual(Array.from(result), [1, 2]);
    });

    it('should pass the correct arguments', () => {
        let xs = [1, 2, 3, 4];
        let thisArg = {};
        let values = [];
        let indices = [];
        let arrays = [];
        let thisArgs = [];
        let result = reject(xs, function(x, i, xs) {
            values.push(x);
            indices.push(i);
            arrays.push(xs);
            thisArgs.push(this);

            return x < 4;
        }, thisArg);

        assert.deepEqual(Array.from(result), [4]);
        assert.deepEqual(values, [1, 2, 3, 4]);
        assert.deepEqual(indices, [0, 1, 2, 3]);
        assert.deepEqual(arrays, [xs, xs, xs, xs]);
        assert.deepEqual(thisArgs, [thisArg, thisArg, thisArg, thisArg]);
    });
});
