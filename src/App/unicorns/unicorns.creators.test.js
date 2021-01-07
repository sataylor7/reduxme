import mockStore from "../../utils/middlewareMockStore";
import ACTIONS from "./unicorns.actions";
import initialState from "./unicorns.model";
import * as C from "./unicorns.creators";

describe("Testing Unicorns Creators", () => {
  const store = mockStore(initialState);
  afterEach(() => {
    store.clearActions();
  });

  test("setUnicornsErrors() creates expected action", () => {
    const error = "oopsy daisy";
    const expectedResult = {
      type: ACTIONS.SET_UNICORNS_ERRORS,
      payload: error
    };
    const action = C.setUnicornsErrors(error);
    store.dispatch(action);
    const actions = store.getActions();
    expect(actions[0]).toEqual(expectedResult);
  });

  test("clearUnicornsErrors() creates expected action", () => {
    
    const expectedResult = {
        type: ACTIONS.CLEAR_UNICORNS_ERRORS
      };
    const action = C.clearUnicornsErrors();
    store.dispatch(action);
    const actions = store.getActions();
    expect(actions[0]).toEqual(expectedResult);
  });

  // please fill out the rest of the tests for the creators

});