import {assert} from 'chai';

import chain from '../src/chain';
import countBy from '../src/countBy';


describe('countBy', () => {
    // it('should handle a true case', () => {
    //     let xs = [1, 2, 3, 4];
    //     let result = chain(xs).all(x => x < 5);

    //     assert.isTrue(result);
    // });

    // it('should handle a false case', () => {
    //     let xs = [1, 2, 3, 4];
    //     let result = chain(xs).all(x => x < 4);

    //     assert.isFalse(result);
    // });

    // it('should cast to true', () => {
    //     let xs = [1, 2, 3, 4];
    //     let result = chain(xs).all(x => x);

    //     assert.equal(result, true);
    // });

    // it('should cast to false', () => {
    //     let xs = [0, 0, 0, 0];
    //     let result = chain(xs).all(x => x);

    //     assert.equal(result, false);
    // });

    it('should work unchained', () => {
        let xs = [2, 3, 4, 5, 6];
        let result = countBy(xs, x => x % 2 === 0 ? 'even' : 'odd');

        assert.deepEqual(result, {
            even: 3,
            odd: 2
        });
    });

    it('should pass the correct arguments', () => {
        let xs = [1, 2, 3, 4, 5];
        let thisArg = {};
        let values = [];
        let indices = [];
        let arrays = [];
        let thisArgs = [];
        let result = chain(xs).countBy(function(x, i, xs) {
            values.push(x);
            indices.push(i);
            arrays.push(xs);
            thisArgs.push(this);

            return x % 2 === 0 ? 'even' : 'odd';
        }, thisArg);

        assert.deepEqual(result, {
            even: 2,
            odd: 3
        });
        assert.deepEqual(values, [1, 2, 3, 4, 5]);
        assert.deepEqual(indices, [0, 1, 2, 3, 4]);
        assert.deepEqual(arrays, [xs, xs, xs, xs, xs]);
        assert.deepEqual(
            thisArgs,
            [thisArg, thisArg, thisArg, thisArg, thisArg]
        );
    });
});
