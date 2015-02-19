import nth from '../src/nth';


describe('nth', () => {
    it('should handle an array', () => {
        let xs = [1, 2, 3, 4];
        let result = nth(xs, 2);

        assert.equal(result, 3);
    });

    it('should handle a string', () => {
        let xs = 'abcd';
        let result = nth(xs, 2);

        assert.equal(result, 'c');
    });

    it('should handle a set', () => {
        let xs = new Set([1, 1, 2, 3, 4]);
        let result = nth(xs, 2);

        assert.equal(result, 3);
    });

    it('should handle a map', () => {
        let xs = new Map([[1, 1], [2, 2]]);
        let result = nth(xs, 0);

        assert.deepEqual(result, [1, 1]);
    });
});
