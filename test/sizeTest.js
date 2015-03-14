import {assert} from 'chai';

import chain from '../src/chain';
import size from '../src/size';


describe('size', () => {
    it('should handle an array', () => {
        let xs = [1, 2, 3, 4];

        assert.equal(chain(xs).size(), 4);
    });

    it('should handle a string', () => {
        let xs = 'abcde';

        assert.equal(chain(xs).size(), 5);
    });

    it('should handle a map', () => {
        let xs = new Map([[1, 1], [2, 2], [3, 3]]);

        assert.equal(chain(xs).size(), 3);
    });

    it('should handle a set', () => {
        let xs = new Set([1, 2, 3, 4]);

        assert.equal(chain(xs).size(), 4);
    });

    it('should work unchained', () => {
        let xs = [1, 2, 3, 4];

        assert.equal(size(xs), 4);
    });
});
