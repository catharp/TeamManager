import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import MemberList from './components/memberList/MemberListContainer';
import AddMember from './components/addMember/AddMember';
import EditMember from './components/editMember/EditMember';

import reducers from './reducers/rootReducer';

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
