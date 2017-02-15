import React, {Component} from 'react';

class LifeCycleRevised extends Component {
  constructor(props) {
    console.log('constructor is only called ONCE');
    super(props);
    this.state = {
      show: true,
      counter: 0
    };
    this.toggleCounter = this.toggleCounter.bind(this);
    this.increaseCounter = this.increaseCounter.bind(this);
  }
  toggleCounter() {
    this.setState({ show: !this.state.show });
  }
  increaseCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }
  componentWillMount() {
    console.log('componentWillMount is only called ONCE: used to load data');
  }
  componentDidMount() {
    console.log('componentDidMount is only called ONCE: used to load data');
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  //Since React 15.2, React.PureComponent changes shouldComponentUpdate
  //https://60devs.com/pure-component-in-react.html
  shouldComponentUpdate() {
    console.log('componentShouldUpdate allows to proceed if the condition returns true');
    console.log('React.PureComponent changes the life-cycle method shouldComponentUpdate and adds some logic to automatically check whether a re-render is required for the component: call method render only if it detects changes in state or props');
    if(this.state.counter < 10) {
      return true;
    } else {
      return false;
    }
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (nextProps.user.id === props.user.id);
  // }
  componentWillUpdate() {
    console.log('componentWillUpdate: before updating');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate: after updating');
  }
  componentWillUnmount() {
    console.log('componentDidUnmount: used to close the api connection');
  }
  render() {
    console.log('render is call EVERY time');
    return(
      <div>
        <p><strong>This is the LifeCycleRevised Component.</strong></p>
        <p>Follow Log operations in Chrome Dev Tools.</p>
        <button onClick={this.toggleCounter}>Toggle Counter</button>
        <button onClick={this.increaseCounter}>Increase Counter</button>
        <br></br>
        <h3>{this.state.show ? this.state.counter : null}</h3>

      </div>
    );
  }
}

export default LifeCycleRevised;
