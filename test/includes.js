import includes from '../src/includes';


describe('includes', () => {
    it('should handle a true case', () => {
        let xs = [1, 2, 3, 4];

        assert.isTrue(chain(xs).includes(1));
    });

    it('should handle a false case', () => {
        let xs = [1, 2, 3, 4];

        assert.isFalse(chain(xs).includes(5));
    });

    it('should handle NaN', () => {
        let xs = [NaN, 2, 3, 4];

        assert.isTrue(chain(xs).includes(NaN));
    });

    it('should handle an array', () => {
        let xs = [1, 2, 3, 4];

        assert.isTrue(chain(xs).includes(1));
        assert.isFalse(chain(xs).includes(5));
    });

    it('should handle a string', () => {
        let xs = 'abcde';

        assert.isTrue(chain(xs).includes('c'));
        assert.isFalse(chain(xs).includes('z'));
    });

    it('should handle a set', () => {
        let xs = new Set([1, 2, 3, 4]);

        assert.isTrue(chain(xs).includes(1));
        assert.isFalse(chain(xs).includes(5));
    });

    it('should work unchained', () => {
        let xs = [1, 2, 3, 4];

        assert.isTrue(includes(xs, 1));
    });
});
