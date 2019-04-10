const randomId = () =>
  Math.random()
    .toString(36)
    .substring(2, 10);

const data = [
  {
    id: randomId(),
    name: 'Syntax.fm Podcast',
    completed: false
  },
  {
    id: randomId(),
    name: 'Code Side Projects',
    completed: false
  },
  {
    id: randomId(),
    name: 'GE Tasker App',
    completed: false
  },
  {
    id: randomId(),
    name: 'Rank up on Code Wars',
    completed: false
  },
  {
    id: randomId(),
    name: 'Code',
    completed: true
  },
  {
    id: randomId(),
    name: 'Grab some coffee',
    completed: true
  },
  {
    id: randomId(),
    name: 'Avengers Endgame ticket',
    completed: true
  },
  {
    id: randomId(),
    name: 'Gym (Leg Day)',
    completed: true
  },
  {
    id: randomId(),
    name: 'Gym (Arm Day)',
    completed: false
  },
  {
    id: randomId(),
    name: 'Gym (Shoulders Day)',
    completed: true
  },
  {
    id: randomId(),
    name: 'Walk Dog',
    completed: false
  }
];

export default data;
export { randomId };
