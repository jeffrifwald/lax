import {assert} from 'chai';
import fs from 'fs';

import lax from '../src/lax';


describe('lax', () => {
    it('should expose everything', (done) => {
        fs.readdir('./src', (err, files) => {
            let result = (
                lax
                .chain(files)
                .filter(x => x.endsWith('.js') && x !== 'lax.js')
                .map(x => x.replace('.js', ''))
                .toArray()
            );

            assert.includeMembers(Object.keys(lax), result);
            done();
        });
    });
});
