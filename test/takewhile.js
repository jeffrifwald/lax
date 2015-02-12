import takewhile from '../src/takewhile';


describe('takewhile', () => {
    it('should take from an array', () => {
        let xs = [1, 2, 2, 3, 1];
        let result = takewhile(xs, x => x < 3);

        assert.deepEqual(Array.from(result), [1, 2, 2]);
    });

    it('should take from a string', () => {
        let xs = 'abcdabcd';
        let result = takewhile(xs, x => x !== 'c');

        assert.deepEqual(Array.from(result), ['a', 'b']);
    });

    it('should take from a map', () => {
        let xs = new Map([[1, 1], [2, 2], ['2', 2], [3,3], [1, 1]]);
        let result = takewhile(xs, x => x[1] < 3);

        assert.deepEqual(Array.from(result), [[1, 1], [2, 2], ['2', 2]]);
    });

    it('should take from a set', () => {
        let xs = new Set([1, 2, 2, 3, 1]);
        let result = takewhile(xs, x => x < 3);

        assert.deepEqual(Array.from(result), [1, 2]);
    });
});
