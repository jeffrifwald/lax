import {assert} from 'chai';
import fs from 'fs';

import index from '../src/index';


describe('index', () => {
    it('should expose everything', (done) => {
        fs.readdir('./src', (err, files) => {
            let result = (
                index
                .chain(files)
                .filter(x => x.endsWith('.js') && x !== 'index.js')
                .map(x => x.replace('.js', ''))
                .toArray()
            );

            assert.includeMembers(Object.keys(index), result);
            done();
        });
    });
});
