import React from 'react';

import Creator from '../../Component.Creator.js';
import { WrappedCustom1, WrappedCustom2, WrappedCustom3, WrappedCustom4, WrappedCustom5 } from './CarouselItems';

const a = new Creator({
  item: [<WrappedCustom1/>, <WrappedCustom2/>, <WrappedCustom3/>],
  thing: []
})
console.log('a', a);

const b = new Creator({
  item: [<WrappedCustom4 />]
})
console.log('b', b);
//
const c = new Creator({
  item: [<WrappedCustom5 />]
})
console.log('c', c);


export default new Creator(a, b, c);
