import React from 'react';
import { Link } from 'react-router-dom';
import routes from './config/lazyLoad';
import { connect } from 'react-redux';
import { updateUnicornsName } from './../App/unicorns/unicorns.creators';

/**
 *  none of the routes folder or index/app.js get bundled into the micro-app library
 *  this is just for local setup convienence
 */
const generatingLinks = route => {
  if (route.path && route.route !== '/') {
    return (
      <h2 key={route.name}>
        <Link to={route.route}> {route.name}</Link>
      </h2>
    );
  }
  return null;
};
const mappingLinks = routes.map(generatingLinks);

const Homepage = ({ unicorns, updateUnicornsName }) => (
  <div className="homepage">
    <header className="homepage-header">
      <h1> Welcome to Unicorns App </h1>
      <h2> Hi there {unicorns.name}</h2>
      {mappingLinks}

      <button
        type="button"
        onClick={e => {
          e.preventDefault();
          updateUnicornsName({ name: 'Brutus' });
        }}
      >
        Change my name to Brutus
      </button>
    </header>
  </div>
);

const mapStateToProps = ({ bobApp }) => {
  const { unicorns = {} } = bobApp;
  return {
    unicorns
  };
};

const mapDispatchToProps = { updateUnicornsName };

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
