import teamReducer from './teamReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  teamMembers: teamReducer,
});

export default rootReducer;
