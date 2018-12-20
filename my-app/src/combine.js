
import { flatten, pipe, map, without } from 'ramda';
const combiner = extractor => pipe(map(extractor), flatten, without([undefined]));
export const combine = (extractor, items) => combiner(extractor)(items);
