import React, { Component } from "react";
import { connect } from "react-redux";

const setCarouselLength = length => ({ type: 'SET_LENGTH', length });
const moveForward = length => ({ type: "MOVE_FORWARD", maxLength: length});
const moveBackward = length => ({ type: "MOVE_BACKWARD", maxLength: length });

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0,
      carou_length: 0
    }
  }
  componentDidMount() {
      this.setState({ carou_length: this.props.children.length - 1 });
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.carou_length !== this.state.carou_length) {
      return true;
    }
    if (nextProps.currentComponent !== this.props.currentComponent) {
      this.setState({ activeItem: nextProps.currentComponent });
      return true;
    }
    return true;
  }
  handleClick = e => {
    if(e.target.id === 'forward') {
      this.props.moveForward(this.state.carou_length);
    } else {
      this.props.moveBackward(this.state.carou_length);
    }
  }
  render() {
    const CurrentComponent = this.props.children[this.state.activeItem] || null;
    return (
      <section className='carousel'>
        <div className="carousel__container">
          <div className="carousel__item--active">
            { CurrentComponent ? React.cloneElement(CurrentComponent, {key: 'currentItem'}): null}
          </div>
          <div className="carousel__items" style={{ display: 'flex', 'flexDirection': 'row', 'justifyContent': 'space-between' }}>
            {this.props.children}
          </div>
          <button id="forward" onClick={this.handleClick}>Forward</button>
          <button id="back" onClick={this.handleClick}>Back</button>
        </div>
      </section>
    );
  }
}

export default connect(
  state => ({ currentComponent: state.currentComponent, carou_length: state.carou_length }),
  dispatch => ({
    setCarouselLength: length => dispatch(setCarouselLength(length)),
    moveForward: length => dispatch(moveForward(length)),
    moveBackward: length => dispatch(moveBackward(length))
  })
)(Carousel);
