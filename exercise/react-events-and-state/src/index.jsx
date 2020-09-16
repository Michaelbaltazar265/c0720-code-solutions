import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({ isClicked: true });
  }

  render() {
    if (this.state.isClicked) {
      return <button>Thanks!!</button>;
    }
    return <button onClick ={this.clickHandler}>Click Me!!</button>;
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
