const commentsCounter = (comments) => {
  let length = 0;
  comments.forEach(() => {
    length += 1;
  });
  return length;
};

export default commentsCounter;