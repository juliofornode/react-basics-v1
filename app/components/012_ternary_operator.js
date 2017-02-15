import React, {Component} from 'react';

class TernaryOperator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: true
    };
  }
  render() {
    return(
      <div>
        <br></br>
        <p><strong>Using the Ternary Operator and null to display text only if condition is matched.</strong></p>
        {this.state.condicion ? null : <p>This paragraph appears because the condition of
          the ternary operator is matched.</p> }
      </div>
    );
  }
}

export default TernaryOperator;
