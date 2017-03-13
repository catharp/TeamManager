const defaultTeam = {
  members: [
    {
      photo: 'https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg',
      firstName: 'David',
      lastName: 'Banner',
      email: 'bruce@culver.gov',
      phone: '800-HULK-OUT',
      role: 'Admin'
    },
    {
      photo: 'https://i.annihil.us/u/prod/marvel/i/mg/9/30/538cd33e15ab7/standard_xlarge.jpg',
      firstName: 'Peter',
      lastName: 'Parker',
      email: 'pete@horizon.io',
      phone: '800-WEB-SRVR',
      role: 'Regular'
    },
    {
      photo: 'https://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg',
      firstName: 'Tony',
      lastName: 'Stark',
      email: 'tony@stark.com',
      phone: '800-IRON-MAN',
      role: 'Regular'
    },
    {
      photo: 'https://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/standard_xlarge.jpg',
      firstName: 'Steve',
      lastName: 'Rogers',
      email: 'srogers@usa.gov',
      phone: '800-AMERICA',
      role: 'Regular'
    }
  ],
  editting: null
}

export default (state = defaultTeam, action) => {
  switch(action.type) {
    case 'UPDATE_MEMBER':
      if (state.editting === null) {
        state.members.push(action.member);
        return state;
      } else {
        state.members.splice(state.editting, 1, action.member);
        return state;
      }
    case 'SET_EDITTING':
      return { ...state, editting: action.index };
    default:
      return state;
  }
}
