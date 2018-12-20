import React, { Component } from 'react';

export default (WrappedComponent, selectData) => {
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }
  class HOC extends Component {
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
      return ( <div style={{ border: 'solid 1px blue', margin: '0 10px 0 10px'}}>
        <WrappedComponent data={this.state.data} {...this.props}/>
      </div>);
    }
  }
  HOC.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;

  return HOC;
}
