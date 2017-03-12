import memberListReducer from './memberList/memberListReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  teamMembers: memberListReducer,
});

export default rootReducer;
