import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter as Router } from 'react-router-dom';


import {AppTest} from "./app";

const Test = () => {
	return (
		<Router><AppTest/></Router>
		)
}

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Test />, div);
  ReactDOM.unmountComponentAtNode(div);
});