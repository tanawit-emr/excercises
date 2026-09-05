'use strict';

const { register } = require('../registry');

register(
  'tanawitGreet',
  {
    description: 'Says hello to whoever is passed in.',
    author: 'starter-kit',
    addedIn: 'v0.1.3',
  },
  (who = 'world') => `Hello, ${who}!`
);
