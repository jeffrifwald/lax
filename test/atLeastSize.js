import {assert} from 'chai';

import chain from '../src/chain';
import atLeastSize from '../src/atLeastSize';


describe('atLeastSize', () => {
    it('should handle an array', () => {
        assert.isTrue(chain([1, 2, 3, 4, 5]).atLeastSize(4));
        assert.isTrue(chain([1, 2, 3, 4, 5]).atLeastSize(5));
        assert.isFalse(chain([1, 2, 3, 4, 5]).atLeastSize(6));
    });

    it('should handle no size', () => {
        assert.isTrue(chain([1, 2, 3, 4, 5]).atLeastSize());
        assert.isTrue(chain([]).atLeastSize());
    });

    it('should handle a negative size', () => {
        assert.isTrue(chain([1, 2, 3, 4, 5]).atLeastSize(-1));
        assert.isTrue(chain([]).atLeastSize(-1));
    });
});
