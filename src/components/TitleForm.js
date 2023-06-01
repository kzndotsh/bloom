import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateNewTitle, updateTitle } from '../actions/titleActions';

const TitleForm = (props) => {
  return (
    <div>
      <input
        className='title-input'
        type='text'
        name='newTitleText'
        value={props.newTitleText}
        onChange={(e) => props.updateNewTitle(e.target.value)}
      />
      <button onClick={() => props.updateTitle(props.newTitle)}>
        Update title
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    newTitle: state.title.newTitle,
  };
};

export default connect(mapStateToProps, { updateNewTitle, updateTitle })(
  TitleForm
);
