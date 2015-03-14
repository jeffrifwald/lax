import {assert} from 'chai';

import chain from '../src/chain';
import zip from '../src/zip';


describe('zip', () => {
    it('should handle arrays', () => {
        let result = (
            chain(['one', 'two', 'three'])
            .zip(['1', '2', '3'], ['01', '10', '11'])
        );

        assert.deepEqual(result.toArray(), [
            ['one', '1', '01'],
            ['two', '2', '10'],
            ['three', '3', '11']
        ]);
    });

    it('should handle strings', () => {
        let result = (
            chain(['a', 'd', 'g'])
            .zip(['b', 'e', 'h'], ['c', 'f', 'i'])
            .flatten()
        );

        assert.deepEqual(result.toString(), 'abcdefghi');
    });

    it('should handle sets', () => {
        let result = (
            chain(new Set(['one', 'two', 'three', 'three']))
            .zip(
                new Set(['1', '2', '3', '2']),
                new Set(['01', '10', '11', '01'])
            )
        );

        assert.deepEqual(result.toArray(), [
            ['one', '1', '01'],
            ['two', '2', '10'],
            ['three', '3', '11']
        ]);
    });

    it('should handle maps', () => {
        let result = (
            chain(
                new Map([[1, 'one'], [2, 'two'], [3, 'three']])
            )
            .zip(
                new Map([[1, '1'], [2, '2'], [3, '3']]),
                new Map([[1, '01'], [2, '10'], [3, '11']])
            )
        );

        assert.deepEqual(result.toArray(), [
            [[1, 'one'], [1, '1'], [1, '01']],
            [[2, 'two'], [2, '2'], [2, '10']],
            [[3, 'three'], [3, '3'], [3, '11']]
        ]);
    });

    it('should handle unbalanced iterables', () => {
        let result = (
            chain(['one', 'two', 'three', 'four'])
            .zip(['1', '2', '3'], ['01', '10', '11'])
        );

        assert.deepEqual(result.toArray(), [
            ['one', '1', '01'],
            ['two', '2', '10'],
            ['three', '3', '11'],
            ['four', undefined, undefined]
        ]);
    });

    it('should handle empty iterables', () => {
        let result = (
            chain(['one', 'two', 'three'])
            .zip(['1', '2', '3'], ['01', '10', '11'], [])
        );

        assert.deepEqual(result.toArray(), [
            ['one', '1', '01', undefined],
            ['two', '2', '10', undefined],
            ['three', '3', '11', undefined]
        ]);
    });

    it('should handle unbalanced and empty iterables', () => {
        let result = (
            chain(['one', 'two', 'three', 'four'])
            .zip(['1', '2', '3'], ['01', '10', '11'], [])
        );

        assert.deepEqual(result.toArray(), [
            ['one', '1', '01', undefined],
            ['two', '2', '10', undefined],
            ['three', '3', '11', undefined],
            ['four', undefined, undefined, undefined]
        ]);
    });

    it('should work unchained', () => {
        let result = zip(
            ['one', 'two', 'three'],
            ['1', '2', '3'],
            ['01', '10', '11']
        );

        assert.deepEqual(Array.from(result), [
            ['one', '1', '01'],
            ['two', '2', '10'],
            ['three', '3', '11']
        ]);
    });
});
