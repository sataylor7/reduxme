import createReducer from '../../utils/redux/createReducer';
import {
  setErrorsHandler,
  clearErrorsHandler
} from '../../utils/redux/error.handlers';
import { updateUnicornsHandler } from './unicorns.handlers';
import ACTIONS from './unicorns.actions';
import initialState from './unicorns.model';

const handlers = {
  [ACTIONS.UPDATE_UNICORNS]: updateUnicornsHandler,
  [ACTIONS.CLEAR_UNICORNS_ERRORS]: clearErrorsHandler,
  [ACTIONS.SET_UNICORNS_ERRORS]: setErrorsHandler
};

const unicornsReducer = createReducer(initialState, handlers);

export default unicornsReducer;
