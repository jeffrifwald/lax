import {assert} from 'chai';

import chain from '../src/chain';
import invoke from '../src/invoke';


describe('invoke', () => {
    class TestClass {
        constructor() {
            this.value = 0;
        }

        inc(v) {
            this.value += v;
        }
    }

    it('should invoke methods', () => {
        let xs = [
            new TestClass(),
            new TestClass()
        ];

        chain(xs).invoke('inc', 2);

        assert.equal(xs[0].value, 2);
        assert.equal(xs[1].value, 2);
    });

    it('should work unchained', () => {
        let xs = [
            new TestClass(),
            new TestClass()
        ];

        invoke(xs, 'inc', 44);

        assert.equal(xs[0].value, 44);
        assert.equal(xs[1].value, 44);
    });
});
