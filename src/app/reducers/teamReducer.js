const defaultTeam = {
  members: [
    {
      photo: 'https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg',
      firstName: 'David',
      lastName: 'Banner',
      email: 'bruce@culver.org',
      phone: '800-HULK-OUT',
      role: 'admin'
    },
    {
      photo: 'https://i.annihil.us/u/prod/marvel/i/mg/9/30/538cd33e15ab7/standard_xlarge.jpg',
      firstName: 'Peter',
      lastName: 'Parker',
      email: 'pete@horizon.io',
      phone: '800-WEB-SRVR',
      role: 'regular'
    },
    {
      photo: 'https://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg',
      firstName: 'Anthony',
      lastName: 'Stark',
      email: 'tony@stark.com',
      phone: '800-IRON-MAN',
      role: 'regular'
    },
    {
      photo: 'https://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/standard_xlarge.jpg',
      firstName: 'Steven',
      lastName: 'Rogers',
      email: 'stever@usa.gov',
      phone: '800-AMERICA',
      role: 'regular'
    }
  ],
  editting: null
}

export default (state = defaultTeam, action) => {
  switch(action.type) {
    case 'SET_EDITTING':
      return { ...state, editting: action.index };
    case 'UPDATE_MEMBER':
      state.editting === null ? state.members.push(action.member) : state.members.splice(state.editting, 1, action.member);
      state.editting = null;
      return state;
    case 'DELETE_MEMBER':
      state.members.splice(state.editting, 1);
      state.editting = null;
      return state;
    default:
      return state;
  }
}
