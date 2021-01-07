import { push } from "connected-react-router";
import { makeActionCreator } from "hmk/packages/hmk-state/lib/hmk-state";
import ACTIONS from "./unicorns.actions";
import api from "../../resource/app.resource";

/**
 * @description Clears Unicorns completely
 */
export const clearUnicornsErrors = () =>
  makeActionCreator(ACTIONS.CLEAR_UNICORNS_ERRORS);

/**
 * @description Set an error/errors of the Unicorns
 */
export const setUnicornsErrors = errors =>
  makeActionCreator(ACTIONS.SET_UNICORNS_ERRORS, errors);

/**
 * @description Update fields on the Unicorns
 * @param {*} payload
 */
export const updateUnicorns= payload =>
  makeActionCreator(ACTIONS.UPDATE_UNICORNS, payload);

/**
 * @description call the example resource to retreive the example response
 *
 */
export const exampleMethod = values => async (dispatch, getState) => {
  dispatch(clearUnicornsErrors());

  let user;
  try {
    user = await api.facade.members.createMember(values);
  } catch (e) {
    // determine what to do with errors
    dispatch(setUnicornsErrors(e.errors));
    return;
  }

  // update user in the redux store

  // update this to where it should go
  dispatch(push("/"));
};
