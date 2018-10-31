import React from 'react';
import { connect } from 'react-redux';

const Image = (props) => {
  const style = {
    cursor: 'pointer',
    margin: 10
  }

  return (
    <img
      style={style}
      onClick={props.clicked}
      src={props.currentSelectedImg}
      alt={props.currentSelectedBtn}>
    </img>
  );
};

const mapStateToProps = state => {
  return {
    currentSelectedImg: state.image,
    currentSelectedBtn: state.selectedBtn
  };
};

export default connect(mapStateToProps)(Image);