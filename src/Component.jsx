
import React, { Component } from 'react';
import HOC from './HOCS/ComponentHOC';

class CustomComponent1 extends Component {
  constructor(props){
    super(props)
  }


  render() {
    console.log("OUR DATA::", this.props);
    return <div style={{ color: 'white' }}>Hello World</div>
  }
};

class CustomComponent2 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div>Hello Custom Component</div>)
  }
}
class CustomComponent3 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div>Hello Custom Component</div>)
  }
}
const WrappedCustom1 = HOC(CustomComponent1, (DataSource, props) => DataSource.getComponent(0));
const WrappedCustom2 = HOC(CustomComponent2, (DataSource, props) => DataSource.getComponent(1));
const WrappedCustom3 = HOC(CustomComponent3, (DataSource, props) => DataSource.getComponent(2));

export const AllComponents = [WrappedCustom1, WrappedCustom2, WrappedCustom3];
