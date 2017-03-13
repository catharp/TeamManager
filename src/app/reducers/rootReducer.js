import teamReducer from './teamReducer';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  team: teamReducer,
  form: formReducer
});

export default rootReducer;
