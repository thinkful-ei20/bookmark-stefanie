'use strict';

const STORE = {
  bookmarks: [
    {
      id: 1,
      title: 'Title A',
      url: 'http://examplea.com',
      desc: 'Description for Title A',
      rating: 5,
      expanded: false
    },
    {
      id: 2,
      title: 'Title B',
      url: 'http://exampleb.com',
      desc: 'Description for Title B',
      rating: 4,
      expanded: false
    },
    {
      id: 3,
      title: 'Title A',
      url: 'http://examplec.com',
      desc: 'Description for Title C',
      rating: 3,
      expanded: false
    },
  ],
  adding: false,
  filter: 0,
};

console.log(STORE);