import fs from 'fs';

import chain from '../src/chain';


describe('chain', () => {
    it('should expose everything', () => {
        let files = (
            chain(fs.readdirSync('./src'))
            .filter(x => x.endsWith('.js'))
            .map(x => x.replace('.js', ''))
            .toArray()
        );

        assert.includeMembers(Object.keys(chain()), files);
    });
});
