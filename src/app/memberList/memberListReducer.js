const defaultTeam = [
  {
    id: 1,
    name: 'David Banner',
    email: 'bruce@culver.gov',
    phone: '800-HULK-OUT',
    role: 'Admin'
  },
  {
    id: 2,
    name: 'Peter Parker',
    email: 'pete@horizon.io',
    phone: '800-WEB-SRVR',
    role: 'Regular'
  },
  {
    id: 3,
    name: 'Tony Stark',
    email: 'tony@stark.com',
    phone: '800-IRON-MAN',
    role: 'Regular'
  },
  {
    id: 4,
    name: 'Steve Rogers',
    email: 'srogers@usa.gov',
    phone: '800-AMERICA',
    role: 'Regular'
  }
];

export default (state = defaultTeam, action) => {
  switch(action.type) {
    default:
      return state;
  }
}
