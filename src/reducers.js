import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import bobApp from './App/app.reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    bobApp
  });
