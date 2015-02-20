import drop from '../src/drop';


describe('drop', () => {
    it('should handle an array', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).drop(2).toArray();

        assert.deepEqual(result, [3, 4]);
    });

    it('should handle a string', () => {
        let xs = 'abcdefg';
        let result = chain(xs).drop(3).toArray();

        assert.deepEqual(result, ['d', 'e', 'f', 'g']);
    });

    it('should handle a set', () => {
        let xs = new Set([1, 2, 3, 4]);
        let result = chain(xs).drop(1).toArray();

        assert.deepEqual(result, [2, 3, 4]);
    });

    it('should handle a map', () => {
        let xs = new Map([[1, 1], [2, 2], [3, 3], [4, 4]]);
        let result = chain(xs).drop(2).toArray();

        assert.deepEqual(result, [[3, 3], [4, 4]]);
    });

     it('should work unchained', () => {
        let xs = [1, 2, 3, 4];
        let result = drop(xs, 2);

        assert.deepEqual(Array.from(result), [3, 4]);
    });
});
