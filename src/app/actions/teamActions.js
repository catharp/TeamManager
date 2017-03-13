export const setEditting = index => ({
  type: 'SET_EDITTING',
  index
});

export const updateMember = member => ({
  type: 'UPDATE_MEMBER',
  member
});

export const deleteMember = () => ({
  type: 'DELETE_MEMBER'
});
