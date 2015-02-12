import nth from '../src/nth';


describe('nth', () => {
    it('should find the nth item of an array', () => {
        let xs = [1, 2, 3, 4];
        let result = nth(xs, 2);

        assert.equal(result, 3);
    });

    it('should find the nth item of a string', () => {
        let xs = 'abcd';
        let result = nth(xs, 2);

        assert.equal(result, 'c');
    });

    it('should find the nth item of a set', () => {
        let xs = new Set([1, 1, 2, 3, 4]);
        let result = nth(xs, 2);

        assert.equal(result, 3);
    });

    it('should find the nth item of a map', () => {
        let xs = new Map([[1, 1], [2, 2]]);
        let result = nth(xs, 0);

        assert.deepEqual(result, [1, 1]);
    });
});
