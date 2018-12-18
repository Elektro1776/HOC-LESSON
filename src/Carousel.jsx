import React, { Component } from 'react';
import { connect } from 'react-redux';

class Carousel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('props:::', this.props);

    return <div>Carousel</div>
  }
}

export default connect((state) => state, dispatch => ({}))(Carousel);
