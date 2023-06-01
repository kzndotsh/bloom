import React from 'react';
import { connect } from 'react-redux';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  return <div>{!props.editing ? <TitleDisplay /> : <TitleForm />}</div>;
};

const mapStateToProps = (state) => {
  return {
    editing: state.title.editing,
  };
};

export default connect(mapStateToProps, {})(Title);
