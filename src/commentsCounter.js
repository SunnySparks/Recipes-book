export default function commentsCounter(comments) {
    let length = 0;
    comments.forEach(comment => length = length+1);
  return length;
};