export const addMember = member => {
  return ({
    type: 'ADD_MEMBER',
    member
  });
};

export const setEditting = index => {
  return ({
    type: 'SET_EDITTING',
    index
  })
}
