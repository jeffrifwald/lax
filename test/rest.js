import rest from '../src/rest';


describe('rest', () => {
    it('should handle an array', () => {
        let xs = [1, 2, 3, 4];
        let result = rest(xs);

        assert.deepEqual(Array.from(result), [2, 3, 4]);
    });

    it('should handle a string', () => {
        let xs = 'hello';
        let result = rest(xs);

        assert.deepEqual(Array.from(result), ['e', 'l', 'l', 'o']);
    });

    it('should handle a map', () => {
        let xs = new Map([[1, 1], [2, 2]]);
        let result = rest(xs);

        assert.deepEqual(Array.from(result), [[2, 2]]);
    });

    it('should handle a set', () => {
        let xs = new Set([1, 1, 2, 2, 3, 4]);
        let result = rest(xs);

        assert.deepEqual(Array.from(result), [2, 3, 4]);
    });

    it('should handle a count', () => {
        let xs = [1, 2, 3, 4];
        let result = rest(xs, 2);

        assert.deepEqual(Array.from(result), [3, 4]);
    });

    it('should handle a 0 count', () => {
        let xs = [1, 2, 3, 4];
        let result = rest(xs, 0);

        assert.deepEqual(Array.from(result), [1, 2, 3, 4]);
    });

    it('should handle a too large count', () => {
        let xs = [1, 2, 3, 4];
        let result = rest(xs, 5);

        assert.deepEqual(Array.from(result), []);
    });
});
