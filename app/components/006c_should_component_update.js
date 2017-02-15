import React, {Component, PropTypes} from 'react';

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div>
        <p><strong>Using shouldComponentUpdate:</strong></p>
        <button
          color={this.props.color}
          onClick={() => this.setState(state => ({count: state.count + 1}))}
        >
          Count: {this.state.count}
        </button>
      </div>

    );
  }
}

CounterButton.propTypes = {
  color: PropTypes.string
};

export default CounterButton;
