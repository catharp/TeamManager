import { browserHistory } from 'react-router';

export const setEditting = index => ({
  type: 'SET_EDITTING',
  index
});

export const updateMember = member => {
  browserHistory.push('/');
  return ({
    type: 'UPDATE_MEMBER',
    member
  });
};

export const deleteMember = () => {
  browserHistory.push('/');
  return ({
    type: 'DELETE_MEMBER'
  });
};
