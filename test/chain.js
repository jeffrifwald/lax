// import fs from 'fs';

// import chain from '../src/chain';


// describe('chain', () => {
//     it('should expose everything', (done) => {
//         fs.readdir('./src', (err, files) => {
//             let result = (
//                 chain(files)
//                 .filter(x => x.endsWith('.js'))
//                 .map(x => x.replace('.js', ''))
//                 .toArray()
//             );

//             assert.includeMembers(Object.keys(chain()), result);
//             done();
//         });
//     });
// });
