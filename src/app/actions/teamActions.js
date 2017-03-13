export const getMemberInfo = index => ({
  type: 'GET_MEMBER_INFO',
  index
});

export const setEditting = index => ({
  type: 'SET_EDITTING',
  index
});

export const updateMember = member => ({
  type: 'UPDATE_MEMBER',
  member
});
