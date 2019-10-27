import React from 'react';

class Bomb extends React.Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log('componentDidMount')
    this.interval = setInterval(() => {
      console.log('setInterval')
      const newCount = this.state.count + 1;
      this.setState({
        count: newCount
      })
    }, 1000)

  }

  componentWillUnmount() {
      clearInterval(this.interval)
    }


render(){
  const counter = this.state.count;

  console.log(counter);
  if(counter >= 8){
    clearInterval(this.interval)
    return <p>BOOM!</p>
  } else if (counter % 2 === 0){
      return <p>Tick</p>
  } else {
     return <p>Tock</p>
  }

  return (
    <div>

      </div>
    )
}

}

export default Bomb;
