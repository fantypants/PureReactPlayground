import React from 'react';
import './counter.css';


let counter = 1;

export default class Counter extends React.Component{
state ={counter: 0,};
increment = () => {
  this.setState({
    counter: this.state.counter +1,
  })
};

decrement = () => {
  this.setState({
    counter: this.state.counter -1,
  })
};

  render() {
    const { counter }= this.state;
    const { name } = this.props;
    return (
      <div className="counter-box">
      <button onClick={this.increment}>+1</button>
      <span className={counter < 0 ? 'counter-box--danger' : 'counter-box--positive'}>
        {name}{counter}
        </span>
      <button onClick={this.decrement}>-1</button>
      </div>
    )
  }
}
