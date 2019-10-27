import React from 'react';

class RouletteGun extends React.Component {
  static defaultProps = {
      bulletInChamber: 8
    };

  state = {
      chamber: null,
      spinningTheChamber: false,
    };


  handleButtonClick = () => {
    console.log('state in handleButtonClick', this.state)
  const toSpin = 'true';
  this.setState({
    spinningTheChamber: toSpin
  })
  this.timeout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8)

      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false,
      })
    }, 2000)
  }
  

  componentWillUnmount() {
   clearTimeout(this.timeout)
 }

renderDisplay() {
  if(this.state.spinningTheChamber){
    return 'spinning the chamber and pulling the trigger! ...'
  } else if (this.state.chamber == this.props.bulletInChamber){
    return 'BANG!!!'
  } else {
    return 'you\'re safe!'
  }

}

render() {
  return (
    <div>
      <p>{this.renderDisplay()}</p>
      <button onClick={this.handleButtonClick}>
        Pull the trigger!
      </button>
    </div>
  )

}
}

export default RouletteGun;
