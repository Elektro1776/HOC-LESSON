
import React from 'react';
import { combine } from './combine';

class Creator {
  constructor({ item }, ..._components) {
    this.item = combine(arg => arg.item, arguments);
    // console.log('THIS.item', this.item);
  }

  createItems = () => {

  }

  get items() {
    return this.item.map((component, idx) => {
      return React.cloneElement(component, { key: idx });
    });
  }

}

export default Creator;
