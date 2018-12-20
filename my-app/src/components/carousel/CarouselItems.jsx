import React, { Component } from 'react';
import HOC from '../../HOCS/ComponentHOC';
import Creator from '../../Component.Creator.js';
import Carousel from '../../containers/Carousel';

class SubCustomComponent1 extends Component {
  render() {
    return (<div>Hello Sub Custom Component 1</div>)
  }
}
class SubCustomComponent2 extends Component {
  render() {
    return (<div>Hello Sub Custom Component 2</div>)
  }
}
const SubWrappedCustom1 = HOC(SubCustomComponent1, (DataSource, props) => DataSource.getComponent(0));
const SubWrappedCustom2 = HOC(SubCustomComponent2, (DataSource, props) => DataSource.getComponent(1));

const SubItem1 = new Creator({
  item: [<SubWrappedCustom1 />]
})

const SubItem2 = new Creator({
  item: [<SubWrappedCustom2 />]
})

const SubCarousel = new Creator(SubItem1, SubItem2);

class CustomComponent1 extends Component {
  render() {
    return <Carousel id={'carousel2'}>{SubCarousel.items}</Carousel>
  }
};

class CustomComponent2 extends Component {
  render() {
    return (<div>Hello Custom Component 2</div>)
  }
}
class CustomComponent3 extends Component {
  render() {
    return (<div>Hello Custom Component 3</div>)
  }
}
class CustomComponent4 extends Component {
  render() {
    return (<div>Hello Custom Component 4</div>)
  }
}
class CustomComponent5 extends Component {
  render() {
    return (<div>Hello Custom Component 5</div>)
  }
}
export const WrappedCustom1 = HOC(CustomComponent1, (DataSource, props) => DataSource.getComponent(0));
export const WrappedCustom2 = HOC(CustomComponent2, (DataSource, props) => DataSource.getComponent(1));
export const WrappedCustom3 = HOC(CustomComponent3, (DataSource, props) => DataSource.getComponent(2));
export const WrappedCustom4 = HOC(CustomComponent4, (DataSource, props) => DataSource.getComponent(3));
export const WrappedCustom5 = HOC(CustomComponent5, (DataSource, props) => DataSource.getComponent(4));
