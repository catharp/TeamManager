const defaultTeam = {
  1: {
    photo: 'https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg',
    name: 'David Banner',
    email: 'bruce@culver.gov',
    phone: '800-HULK-OUT',
    role: 'Admin'
  },
  2: {
    photo: 'https://i.annihil.us/u/prod/marvel/i/mg/9/30/538cd33e15ab7/standard_xlarge.jpg',
    name: 'Peter Parker',
    email: 'pete@horizon.io',
    phone: '800-WEB-SRVR',
    role: 'Regular'
  },
  3: {
    photo: 'https://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg',
    name: 'Tony Stark',
    email: 'tony@stark.com',
    phone: '800-IRON-MAN',
    role: 'Regular'
  },
  4: {
    photo: 'https://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/standard_xlarge.jpg',
    name: 'Steve Rogers',
    email: 'srogers@usa.gov',
    phone: '800-AMERICA',
    role: 'Regular'
  }
};

export default (state = defaultTeam, action) => {
  switch(action.type) {
    default:
      return state;
  }
}
