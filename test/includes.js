import includes from '../src/includes';


describe('includes', () => {
    it('should handle a true case', () => {
        let xs = [1, 2, 3, 4];

        assert.isTrue(includes(xs, 1));
    });

    it('should handle a false case', () => {
        let xs = [1, 2, 3, 4];

        assert.isFalse(includes(xs, 5));
    });

    it('should handle NaN', () => {
        let xs = [NaN, 2, 3, 4];

        assert.isTrue(includes(xs, NaN));
    });

    it('should handle an array', () => {
        let xs = [1, 2, 3, 4];

        assert.isTrue(includes(xs, 1));
        assert.isFalse(includes(xs, 5));
    });

    it('should handle a string', () => {
        let xs = 'abcde';

        assert.isTrue(includes(xs, 'c'));
        assert.isFalse(includes(xs, 'z'));
    });

    it('should handle a set', () => {
        let xs = new Set([1, 2, 3, 4]);

        assert.isTrue(includes(xs, 1));
        assert.isFalse(includes(xs, 5));
    });
});
