export const updateMember = member => {
  return ({
    type: 'UPDATE_MEMBER',
    member
  });
};

export const setEditting = index => {
  return ({
    type: 'SET_EDITTING',
    index
  })
}
