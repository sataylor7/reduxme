import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Unicorns from "./unicorns.container";

describe("Account Container", () => {
  test("renders component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Unicorns />, div);
  });

  test("mounts component", () => {
    const component = mount(<Unicorns />);
    // please update this line and upcomment to test that it works correctly
    //expect(component.find("#userAccount").length).toEqual(1);
  });

  test("should render correctly", done => {
    const component = shallow(<Unicorns />);
    const tree = toJson(component);

    expect(tree).toMatchSnapshot();
    expect(component.length).toEqual(1);
    done();
  });

  // please fill out the rest of the test for container
});