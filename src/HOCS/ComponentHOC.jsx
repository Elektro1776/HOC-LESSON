import React, { Component } from 'react';

export default (WrappedComponent, selectData) => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.components = [
        {id: 0}, { id: 1}, { id:2 }
      ]
      this.state = {
        data: selectData({ getComponent: id => this.components.filter(component => { return id === component.id ? component : null })}, props)
      };
    }

    render() {
      return (<WrappedComponent data={this.state.data} {...this.props} />);
    }
  }
}
