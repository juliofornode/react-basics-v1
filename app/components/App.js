import React, { Component } from 'react';
import FunctionalComponent from './001_functional_component';
import ClassComponent from './002_class_component';
import ManageData from './003_manage_data';
import ManageComplexData from './004_manage_complex_data';
import UserEvents from './005_user_events';
import Clock from './006_lifecycle_methods';
import LifeCycleRevised from './006b_lifecycle_revised';
import CounterButton from './006c_should_component_update';
import CounterButtonPure from './006d_pure_component';
import Toggle from './007_toggle';
import ConditionalComponent from './008_conditional_component';
import ControlledComponent from './009_controlled_component';
import UncontrolledComponent from './010_uncontrolled_component';
import PropsChildren from './011_props_children';
import TernaryOperator from './012_ternary_operator';

class App extends Component {
  render() {
    return(
      <div style={{margin: '50px', marginBottom: '300px'}}>
        <FunctionalComponent propiedad="Unicornio" />
        <ClassComponent nombre="Tintin"/>
        <ManageData />
        <ManageComplexData />
        <UserEvents />
        <Clock />
        <LifeCycleRevised />
        <CounterButton color='blue'/>
        <CounterButtonPure color='red'/>
        <Toggle />
        <ConditionalComponent />
        <ControlledComponent />
        <UncontrolledComponent />
        <PropsChildren>
          <div>This is child one.</div>
          <div>And this is child two.</div>
        </PropsChildren>
        <TernaryOperator />
      </div>
    );
  }
}

export default App;
