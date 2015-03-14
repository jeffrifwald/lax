import {assert} from 'chai';

import chain from '../src/chain';
import indexOf from '../src/indexOf';


describe('indexOf', () => {
    it('should handle found', () => {
        let xs = [1, 2, 3, 4];

        assert.equal(chain(xs).indexOf(1), 0);
    });

    it('should handle not found', () => {
        let xs = [1, 2, 3, 4];

        assert.equal(chain(xs).indexOf(5), -1);
    });

    it('should handle NaN', () => {
        let xs = [2, 3, 4, NaN];

        assert.equal(chain(xs).indexOf(NaN), 3);
    });

    it('should handle an array', () => {
        let xs = [1, 2, 3, 4];

        assert.equal(chain(xs).indexOf(1), 0);
        assert.equal(chain(xs).indexOf(5), -1);
    });

    it('should handle a string', () => {
        let xs = 'abcde';

        assert.equal(chain(xs).indexOf('c'), 2);
        assert.equal(chain(xs).indexOf('z'), -1);
    });

    it('should handle a set', () => {
        let xs = new Set([1, 2, 3, 4]);

        assert.equal(chain(xs).indexOf(1), 0);
        assert.equal(chain(xs).indexOf(5), -1);
    });

    it('should work unchained', () => {
        let xs = [1, 2, 3, 4];

        assert.equal(indexOf(xs, 1), 0);
    });
});
