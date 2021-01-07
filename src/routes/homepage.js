import React from "react";
import { Link } from "react-router-dom";
import routes from "./config/lazyLoad"; 

/**
 *  none of the routes folder or index/app.js get bundled into the micro-app library
 *  this is just for local setup convienence 
 */
const generatingLinks = (route) => {
  if(route.path && route.route !== "/"){
    return ( <h2 key={route.name}>
      <Link to={route.route}> {route.name}</Link>
      </h2>)
  }
  return null;
}
const mappingLinks = routes.map(generatingLinks); 

const Homepage = () => (
    <div className="homepage">
      <header className="homepage-header">
        <h1> Welcome to bobApp </h1>
        
        {mappingLinks}
        
      </header>
    </div>
  );

export default Homepage;  