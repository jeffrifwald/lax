import some from './some';


function none(xs, predicate, thisArg) {
    return !some(xs, predicate, thisArg);
}

export default none;
