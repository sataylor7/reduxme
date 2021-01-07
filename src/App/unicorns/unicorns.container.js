import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { updateUnicornsName, updateUnicorns } from './unicorns.creators';

const listUnicornProps = unicorns => {
  return Object.keys(unicorns).map((key, index) => {
    const value = unicorns[key];
    return (
      <li key={`${value}-${index}`}>
        <strong>{key}:</strong> {value}
      </li>
    );
  });
};

const UnicornsContainer = ({
  updateUnicornsName,
  unicorns,
  push,
  updateUnicorns
}) => {
  const { type, name } = unicorns;
  return (
    <div>
      <h2>Unicorns Goes Here</h2>
      {unicorns && <ul> {listUnicornProps(unicorns)}</ul>}
      <label htmlFor="unicorn-name">Please type in a name</label> <br />
      <input
        name="unicorn-name"
        type="text"
        onBlur={e => {
          e.preventDefault();
          console.log(e.target.value);
          updateUnicornsName({ name: e.target.value });
        }}
      />
      <hr />
      <div
        onChange={e => {
          console.log(e.target.value);
          updateUnicorns({ favorite_food: e.target.value });
        }}
      >
        <label htmlFor="favorite-food"> pick your favorite food</label> <br />
        <input type="radio" name="favorite-food" value="pizza" /> Pizza <br />
        <input type="radio" name="favorite-food" value="cake" /> Cake <br />
        <input type="radio" name="favorite-food" value="bbq" /> BBQ
      </div>
      <button
        type="button"
        onClick={e => {
          e.preventDefault();
          updateUnicorns({ favorite_color: 'green' });
        }}
      >
        Update favorite color
      </button>
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

const mapDispatchToProps = { updateUnicornsName, push, updateUnicorns };

export default connect(mapStateToProps, mapDispatchToProps)(UnicornsContainer);
