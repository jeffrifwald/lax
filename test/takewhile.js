import takeWhile from '../src/takeWhile';


describe('takeWhile', () => {
    it('should handle an array', () => {
        let xs = [1, 2, 2, 3, 1];
        let result = takeWhile(xs, x => x < 3);

        assert.deepEqual(Array.from(result), [1, 2, 2]);
    });

    it('should handle a string', () => {
        let xs = 'abcdabcd';
        let result = takeWhile(xs, x => x !== 'c');

        assert.deepEqual(Array.from(result), ['a', 'b']);
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
});
