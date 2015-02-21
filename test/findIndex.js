import chain from '../src/chain';
import findIndex from '../src/findIndex';


describe('findIndex', () => {
    it('should handle an array', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).findIndex(x => x === 3);

        assert.equal(result, 2);
    });

    it('should handle a string', () => {
        let xs = 'abcd';
        let result = chain(xs).findIndex(x => x === 'd');

        assert.equal(result, 3);
    });

    it('should handle a map', () => {
        let xs = new Map([[1, 1], [2, 2], [3,3], [4, 4]]);
        let result = chain(xs).findIndex(x => x[0] === 2);

        assert.deepEqual(result, 1);
    });

    it('should handle a set', () => {
        let xs = new Set([1, 2, 3, 4]);
        let result = chain(xs).findIndex(x => x === 2);

        assert.equal(result, 1);
    });

    it('should handle not found', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).findIndex(x => x > 4);

        assert.equal(result, -1);
    });

    it('should work unchained', () => {
        let xs = [1, 2, 3, 4];
        let result = findIndex(xs, x => x === 3);

        assert.deepEqual(result, 2);
    });

    it('should pass the correct arguments', () => {
        let xs = [1, 2, 3, 4];
        let thisArg = {};
        let values = [];
        let indices = [];
        let arrays = [];
        let thisArgs = [];
        let result = chain(xs).findIndex(function(x, i, xs) {
            values.push(x);
            indices.push(i);
            arrays.push(xs);
            thisArgs.push(this);

            return x === 4;
        }, thisArg);

        assert.deepEqual(result, 3);
        assert.deepEqual(values, [1, 2, 3, 4]);
        assert.deepEqual(indices, [0, 1, 2, 3]);
        assert.deepEqual(arrays, [xs, xs, xs, xs]);
        assert.deepEqual(thisArgs, [thisArg, thisArg, thisArg, thisArg]);
    });
});
