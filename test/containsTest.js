import {assert} from 'chai';

import chain from '../src/chain';
import contains from '../src/contains';


describe('contains', () => {
    it('should handle a true case', () => {
        let xs = [1, 2, 3, 4];

        assert.isTrue(chain(xs).contains(1));
    });

    it('should handle a false case', () => {
        let xs = [1, 2, 3, 4];

        assert.isFalse(chain(xs).contains(5));
    });

    it('should handle NaN', () => {
        let xs = [NaN, 2, 3, 4];

        assert.isTrue(chain(xs).contains(NaN));
    });

    it('should handle an array', () => {
        let xs = [1, 2, 3, 4];

        assert.isTrue(chain(xs).contains(1));
        assert.isFalse(chain(xs).contains(5));
    });

    it('should handle a string', () => {
        let xs = 'abcde';

        assert.isTrue(chain(xs).contains('c'));
        assert.isFalse(chain(xs).contains('z'));
    });

    it('should handle a set', () => {
        let xs = new Set([1, 2, 3, 4]);

        assert.isTrue(chain(xs).contains(1));
        assert.isFalse(chain(xs).contains(5));
    });

    it('should work unchained', () => {
        let xs = [1, 2, 3, 4];

        assert.isTrue(contains(xs, 1));
    });
});
