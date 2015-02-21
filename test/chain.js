import {assert} from 'chai';
import fs from 'fs';

import chain from '../src/chain';


describe('chain', () => {
    it('should expose everything', (done) => {
        fs.readdir('./src', (err, files) => {
            let result = (
                chain(files)
                .filter(x => x.endsWith('.js'))
                .map(x => x.replace('.js', ''))
                .toArray()
            );

            assert.includeMembers(Object.keys(chain()), result);
            done();
        });
    });

    it('should turn an iterable into an array', () => {
        let xs = [1, 2, 3, 4];

        assert.deepEqual(chain(xs).toArray(), [1, 2, 3, 4]);
    });

    it('should turn an iterable into a string', () => {
        let xs = ['h', 'e', 'l', 'l', 'o'];

        assert.deepEqual(chain(xs).toString(), 'hello');
    });

    it('should turn an iterable into a map', () => {
        let xs = [['one', 1], ['two', 2], ['three', 3]];
        let m = chain(xs).toMap();
        let keys = chain(m.keys()).toArray();
        let values = chain(m.values()).toArray();

        assert.instanceOf(m, Map);
        assert.deepEqual(keys, ['one', 'two', 'three']);
        assert.deepEqual(values, [1, 2, 3]);
    });

    it('should turn an iterable into a set', () => {
        let xs = [1, 1, 2, 3, 4];
        let s = chain(xs).toSet();
        let keys = chain(s.keys()).toArray();
        let values = chain(s.values()).toArray();

        assert.instanceOf(s, Set);
        assert.deepEqual(keys, [1, 2, 3, 4]);
        assert.deepEqual(values, [1, 2, 3, 4]);
    });
});
