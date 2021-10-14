import commentsCounter from './commentsCounter';

const commentsArray = [
  { comment1: 'hi' },
  { comment2: 'bye' },
  { comment3: 'hello' },
  { comment4: 'au revoir' },
  { comment5: 'bonjour' },
  { comment6: 'adios' },
  { comment7: 'konnichiwa' },
  { comment8: 'sayonara' },
];

const moreComments = [
  { comment: 'this' },
  { comment2: 'is' },
  { comment3: 'a' },
  { comment4: 'comments' },
  { comment6: 'array' },
];

test('Expects commentsArray length to be 8', () => {
  expect(commentsCounter(commentsArray)).toBe(8);
});

test('Expects commentsArray length to be 8', () => {
  expect(commentsCounter(commentsArray)).not.toBe(5);
});

test('Expects the moreComments array length to be 5', () => {
  expect(commentsCounter(moreComments)).toBe(5);
});

test('Expects the moreComments array length to be 5', () => {
  expect(commentsCounter(moreComments)).not.toBe(2);
});