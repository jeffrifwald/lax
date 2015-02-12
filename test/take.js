import take from '../src/take';


describe('take', () => {
    it('should take from an array', () => {
        let xs = [1, 2, 3, 4];
        let result = take(xs, 2);

        assert.deepEqual(Array.from(result), [1, 2]);
    });

    it('should take from a string', () => {
        let xs = 'abcdefg';
        let result = take(xs, 3);

        assert.deepEqual(Array.from(result), ['a', 'b', 'c']);
    });

    it('should take from a set', () => {
        let xs = new Set([1, 2, 3, 4]);
        let result = take(xs, 1);

        assert.deepEqual(Array.from(result), [1]);
    });

    it('should take from a map', () => {
        let xs = new Map([[1, 1], [2, 2], [3,3], [4, 4]]);
        let result = take(xs, 2);

        assert.deepEqual(Array.from(result), [[1, 1], [2, 2]]);
    });
});
