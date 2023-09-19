import React from 'react';
import { connect } from 'react-redux';
import { setMessage } from '../state/action-creators';

// Error: When called with an action of type "SET_INFO_MESSAGE", the slice reducer for key "infoMessage" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.

export function Message(props) {
    const { message } = props;
    return <div id='message'>{message}</div>;
}

const mapStateToProps = (state) => {
    return {
        message: state.infoMessage,
    };
};

export default connect(mapStateToProps, { setMessage })(Message);
