import flatten from './flatten';


function *flattenDeep(xs) {
    yield *flatten(xs, true);
}

export default flattenDeep;
