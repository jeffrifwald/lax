import nth from './nth';
import size from './size';


function *sample(xs, n=1) {
    let max = size(xs);
    let i = 0;

    while (i < n) {
        yield nth(xs, Math.floor(Math.random() * max));
        i += 1;
    }
}

export default sample;
