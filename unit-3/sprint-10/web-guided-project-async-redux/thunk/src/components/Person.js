import React from 'react';
import { connect } from 'react-redux';
import { getPerson } from '../actions';

const Person = (props) => {
  const { person, isFetching, error } = props;

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching person for ya!</h2>;
  }

  return (
    <>
      <div>
        <h2>
          Say Hi to: {person.name.first} {person.name.last}
        </h2>
        <img src={person.picture.large} />
      </div>
      <button onClick={() => props.getPerson()}>Get new person</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    person: state.person,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getPerson })(Person);
