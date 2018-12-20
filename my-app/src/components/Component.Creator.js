
import { combine } from '../combine';

class Creator {
  constructor({ item }, ..._components) {
    // console.log('item', item);
    this.item = combine(arg => arg.item, arguments);
  }

  createItems = () => {

  }

  get items() {
    // console.log('this.component', this.component);
    return this.component;
  }

}

export default Creator;
