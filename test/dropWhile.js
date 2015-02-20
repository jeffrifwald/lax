import dropWhile from '../src/dropWhile';


describe('dropWhile', () => {
    it('should handle an array', () => {
        let xs = [1, 2, 2, 3, 1];
        let result = dropWhile(xs, x => x < 3);

        assert.deepEqual(Array.from(result), [3, 1]);
    });

    it('should handle a string', () => {
        let xs = 'abcdabcd';
        let result = dropWhile(xs, x => x !== 'c');

        assert.deepEqual(Array.from(result), ['c', 'd', 'a', 'b', 'c', 'd']);
    });

    it('should handle a map', () => {
        let xs = new Map([[1, 1], [2, 2], ['2', 2], [3, 3], [-1, -1]]);
        let result = dropWhile(xs, x => x[1] < 3);

        assert.deepEqual(Array.from(result), [[3, 3], [-1, -1]]);
    });

    it('should handle a set', () => {
        let xs = new Set([1, 2, 2, 3, -1]);
        let result = dropWhile(xs, x => x < 3);

        assert.deepEqual(Array.from(result), [3, -1]);
    });

    it('should pass the correct arguments', () => {
        let xs = [1, 2, 3, 4];
        let thisArg = {};
        let values = [];
        let indices = [];
        let arrays = [];
        let thisArgs = [];
        let result = dropWhile(xs, function(x, i, xs) {
            values.push(x);
            indices.push(i);
            arrays.push(xs);
            thisArgs.push(this);

            return x < 5;
        }, thisArg);

        assert.deepEqual(Array.from(result), []);
        assert.deepEqual(values, [1, 2, 3, 4]);
        assert.deepEqual(indices, [0, 1, 2, 3]);
        assert.deepEqual(arrays, [xs, xs, xs, xs]);
        assert.deepEqual(thisArgs, [thisArg, thisArg, thisArg, thisArg]);
    });
});
