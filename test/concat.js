import concat from '../src/concat';


describe('concat', () => {
    it('should handle an array', () => {
        let result = chain([1, 2, 3]).concat([4, 5]).toArray();

        assert.deepEqual(result, [1, 2, 3, 4, 5]);
    });

    it('should handle a string', () => {
        let result = chain('he').concat('ll', 'o').toString();

        assert.deepEqual(result, 'hello');
    });

    it('should handle a map', () => {
        let result = (
            chain(new Map([[1, 1]]))
            .concat(new Map([[2, 2]]))
            .toArray()
        );

        assert.deepEqual(result, [[1, 1], [2, 2]]);
    });

    it('should handle a set', () => {
        let result = (
            chain(new Set([1, 2, 3]))
            .concat(new Set([4, 5]))
            .toArray()
        );

        assert.deepEqual(result, [1, 2, 3, 4, 5]);
    });

    it('should handle a single argument', () => {
        let result = chain([1]).concat().toArray();

        assert.deepEqual(result, [1]);
    });

    it('should work unchained', () => {
        let result = concat([1, 2, 3], [4, 5]);

        assert.deepEqual(Array.from(result), [1, 2, 3, 4, 5]);
    });
});
