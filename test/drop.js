import drop from '../src/drop';


describe('drop', () => {
    it('should drop from an array', () => {
        let xs = [1, 2, 3, 4];
        let result = drop(xs, 2);

        assert.deepEqual(Array.from(result), [3, 4]);
    });

    it('should drop from a string', () => {
        let xs = 'abcdefg';
        let result = drop(xs, 3);

        assert.deepEqual(Array.from(result), ['d', 'e', 'f', 'g']);
    });

    it('should drop from a set', () => {
        let xs = new Set([1, 2, 3, 4]);
        let result = drop(xs, 1);

        assert.deepEqual(Array.from(result), [2, 3, 4]);
    });

    it('should drop from a map', () => {
        let xs = new Map([[1, 1], [2, 2], [3,3], [4, 4]]);
        let result = drop(xs, 2);

        assert.deepEqual(Array.from(result), [[3, 3], [4, 4]]);
    });
});
