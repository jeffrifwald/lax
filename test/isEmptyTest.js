import {assert} from 'chai';

import chain from '../src/chain';
import isEmpty from '../src/isEmpty';


describe('isEmpty', () => {
    it('should handle an array', () => {
        assert.isFalse(chain([1, 2, 3, 4]).isEmpty());
        assert.isTrue(chain([]).isEmpty());
    });

    it('should handle a string', () => {
        assert.isFalse(chain('abcdefg').isEmpty());
        assert.isTrue(chain('').isEmpty());
    });

    it('should handle a set', () => {
        assert.isFalse(chain(new Set([1, 2, 3, 4])).isEmpty());
        assert.isTrue(chain(new Set()).isEmpty());
    });

    it('should handle a map', () => {
        assert.isFalse(chain(new Map([[1, 1], [2, 2]])).isEmpty());
        assert.isTrue(chain(new Map()).isEmpty());
    });

    it('should handle falsey values', () => {
        assert.isTrue(chain(false).isEmpty());
        assert.isTrue(chain(null).isEmpty());
        assert.isTrue(chain(undefined).isEmpty());
        assert.isTrue(chain(0).isEmpty());
        assert.isTrue(chain(NaN).isEmpty());
    });

    it('should handle non-iterables', () => {
        assert.isTrue(chain(1).isEmpty());
        assert.isTrue(chain(true).isEmpty());
    });

    it('should work unchained', () => {
        assert.isFalse(isEmpty([1, 2, 3, 4]));
        assert.isTrue(isEmpty([]));
    });
});
