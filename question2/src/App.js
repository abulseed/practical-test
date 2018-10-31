import React, { Component } from 'react';

import './App.css';

import Button from './components/Button/Button';
import Image from './components/Image/Image';
import { MOVE_NEXT_SLIDE } from './store';
import { connect } from 'react-redux';

import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image clicked={this.props.imgClicked} />
        <div className="BtnContainer">
          <Button buttonName="Button1" image={img1} index={0} />
          <Button buttonName="Button2" image={img2} index={1} />
          <Button buttonName="Button3" image={img3} index={2} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    imgClicked: () => dispatch({
      type: MOVE_NEXT_SLIDE
    })
  }
};

export default connect(null, mapDispatchToProps)(App);
