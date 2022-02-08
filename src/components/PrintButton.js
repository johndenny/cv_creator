import React, { Component } from 'react';

class PrintButton extends Component {
  pagePrint = (event) => {
    event.preventDefault();
    window.print();
  }

  render() {
    const { pageAnimate } = this.props;

    return (
      <form>
        <button className='printButton' onClick={this.pagePrint}>Print!</button>
        <button className='continueButton'onClick={pageAnimate}>Continue Editing</button>
      </form>
    )
  };
}

export default PrintButton;