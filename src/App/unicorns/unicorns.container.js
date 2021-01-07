import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { updateUnicornsName } from './unicorns.creators';

const UnicornsContainer = ({ updateUnicornsName, unicorns, push }) => {
  const { type, name } = unicorns;
  return (
    <div>
      <h2>Unicorns Goes Here</h2>
      <p>Current Name: {name}</p>
      <p>Type: {type}</p>
      <label>Please type in a name</label> <br />
      <input
        type="text"
        onBlur={e => {
          e.preventDefault();
          console.log(e.target.value);
          updateUnicornsName({ name: e.target.value });
        }}
      />
      <hr />
      <button
        type="button"
        onClick={e => {
          e.preventDefault();
          push('/');
        }}
      >
        Go Home
      </button>
    </div>
  );
};

const mapStateToProps = ({ bobApp }) => {
  const { unicorns = {} } = bobApp;
  return {
    unicorns
  };
};

const mapDispatchToProps = { updateUnicornsName, push };

export default connect(mapStateToProps, mapDispatchToProps)(UnicornsContainer);
