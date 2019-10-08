import { combineReducers } from 'redux';

import sessionReducer from './sessionReducer';

const rootReducer = combineReducers({
  session: sessionReducer
});

export default rootReducer;

/* NO CLUE WHAT THIS DOES EITHER */
