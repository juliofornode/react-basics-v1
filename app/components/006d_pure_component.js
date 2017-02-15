// React doc: https://facebook.github.io/react/docs/optimizing-performance.html
// Careful: https://facebook.github.io/react/docs/react-api.html#react.purecomponent
// Interesting post: https://60devs.com/pure-component-in-react.html

//Careful: When a pure component has children, all child components
//that depend on a change in this.context will not re-render when the context is
//changed, unless the parent PureComponent declares contextTypes.


//Important: the state is immutable in a Pure Component, so if the state prop is an array or object to change it
//we need to do the same we do in the reducers (use concat, or spread operator, etc)

import React, {PureComponent, PropTypes} from 'react';

class CounterButtonPure extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  render() {
    return (
      <div>
        <p><strong>Using PureComponent:</strong></p>
        <button
          color={this.props.color}
          onClick={() => this.setState(state => ({count: state.count + 1}))}>
          Count: {this.state.count}
        </button>
      </div>

    );
  }
}

CounterButtonPure.propTypes = {
  color: PropTypes.string
};

export default CounterButtonPure;
