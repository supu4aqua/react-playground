import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
static defaultProps = { sections: [] };
state = {
    currentSectionIndex: 0
  };

  handleButtonClick(index) {
  this.setState({ currentSectionIndex: index })
  }
renderItem(){
  return this.props.sections.map((section, index) => (
    <li className='Accordion__item' key={index}><button key={index} onClick={() => this.handleButtonClick(index)}>
      {section.title}
    </button>
     {(this.state.currentSectionIndex === index) && <p>{section.content}</p>}
    </li>
  ))
}

render(){
  return (
    <ul className='Accordion'>
        {this.renderItem()}
    </ul>
  )
}

}

export default Accordion;
