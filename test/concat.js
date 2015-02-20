import concat from '../src/concat';


describe('concat', () => {
    it('should handle an array', () => {
        let result = concat([1, 2, 3], [4, 5]);

        assert.deepEqual(Array.from(result), [1, 2, 3, 4, 5]);
    });

    it('should handle a string', () => {
        let result = concat('he', 'll', 'o');

        assert.deepEqual(Array.from(result), ['h', 'e', 'l', 'l', 'o']);
    });

    it('should handle a map', () => {
        let result = concat(new Map([[1, 1]]), new Map([[2, 2]]));

        assert.deepEqual(Array.from(result), [[1, 1], [2, 2]]);
    });

    it('should handle a set', () => {
        let result = concat(new Set([1, 2, 3]), new Set([4, 5]));

        assert.deepEqual(Array.from(result), [1, 2, 3, 4, 5]);
    });

    it('should handle a single argument', () => {
        let result = concat([1]);

        assert.deepEqual(Array.from(result), [1]);
    });

    it('should handle no arguments', () => {
        let result = concat();

        assert.deepEqual(Array.from(result), []);
    });
});
