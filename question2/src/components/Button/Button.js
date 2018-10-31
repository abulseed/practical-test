import React from 'react';
import { connect } from 'react-redux';

import { SET_CURRENT_STATE } from '../../store'

const Button = (props) => {
  const styleClass = {
    width: 100,
    height: 50,
    border: 'solid 1px black',
    margin: 5,
    cursor: 'pointer',
    borderRadius: 5,
    backgroundColor: props.currentSelectedBtn === props.buttonName ? 'yellow' : 'red'
  }
  return (
    <button onClick={props.clicked} style={styleClass}>{props.buttonName}</button>
  );
}

const mapStateToProps = state => {
  return {
    currentSelectedBtn: state.selectedBtn
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    clicked: () => dispatch({
      type: SET_CURRENT_STATE,
      image: props.image,
      selectedBtn: props.buttonName,
      currentIndex: props.index
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);