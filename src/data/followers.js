const startingFollowers = [
  {
    id: 1,
    name: 'Rick Sanchez',
    api: 'https://rickandmortyapi.com/api/character/1',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    id: 2,
    name: 'Morty Smith',
    api: 'https://rickandmortyapi.com/api/character/2',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
  {
    id: 3,
    name: 'Summer Smith',
    api: 'https://rickandmortyapi.com/api/character/3',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
  },
];

const adventureFollowers = [
  {
    id: 126,
    name: 'Fleeb',
    api: 'https://rickandmortyapi.com/api/character/126',
    image: 'https://rickandmortyapi.com/api/character/avatar/126.jpeg',
    modifier: 15,
  },
  {
    id: 99,
    name: 'Hepatitis C',
    api: 'https://rickandmortyapi.com/api/character/99',
    image: 'https://rickandmortyapi.com/api/character/avatar/99.jpeg',
    modifier: 20,
  },
  {
    id: 570,
    name: 'Chachi',
    api: 'https://rickandmortyapi.com/api/character/570',
    image: 'https://rickandmortyapi.com/api/character/avatar/570.jpeg',
    modifier: 15,
  },
];

const quizFollowers = [
  {
    id: 219,
    name: 'Mechanical Summer',
    api: 'https://rickandmortyapi.com/api/character/219',
    image: 'https://rickandmortyapi.com/api/character/avatar/219.jpeg',
    modifier: 10,
  },
  {
    id: 475,
    name: 'Dancer Morty',
    api: 'https://rickandmortyapi.com/api/character/475',
    image: 'https://rickandmortyapi.com/api/character/avatar/475.jpeg',
    modifier: 15,
  },
  {
    id: 389,
    name: 'Zeta Alpha Rick',
    api: 'https://rickandmortyapi.com/api/character/389',
    image: 'https://rickandmortyapi.com/api/character/avatar/389.jpeg',
    modifier: 15,
  },
];

const allFollowers = [
  ...startingFollowers,
  ...quizFollowers,
  ...adventureFollowers,
];

export { allFollowers, adventureFollowers, quizFollowers };
