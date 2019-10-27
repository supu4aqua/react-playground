import React from 'react';

class HelloWorld extends React.Component {
constructor(props) {
  console.log('Constructor');
super(props);
this.state = { who: 'world' }
}

handleButtonClick1 = () => {
//t newState = this.state.count + this.props.step;
this.setState({
  who: 'world!'
})
}
handleButtonClick2 = () => {
//const newState = this.state.count + this.props.step;
this.setState({
  who: 'friend!'
})
}
handleButtonClick3 = () => {
//const newState = this.state.count + this.props.step;
this.setState({
  who: 'React!'
})
}

render() {
  //console.log('Hello');
  return (

  <div>
  <p>Hello, {this.state.who}</p>
  <button onClick={this.handleButtonClick1}>
   World
  </button>
  <button onClick={this.handleButtonClick2}>
    Friend
  </button>
  <button onClick={this.handleButtonClick3}>
    React
  </button>
  </div>

)
}
}

export default HelloWorld;
