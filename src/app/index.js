import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import MemberList from './memberList/MemberList';
import AddMember from './addMember/AddMember';
import EditMember from './editMember/EditMember';

import reducers from './reducers';

import './bundle.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={MemberList} />;
        <Route path="/addMember" component={AddMember} />
        <Route path="/editMember" component={EditMember} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('react-root'));
