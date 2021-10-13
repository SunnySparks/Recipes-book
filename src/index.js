import './style.css';

import displayList from './listItems';
import LikesAPI from './involvementAPI';
import { getLocalStorage, setLocalStorage } from './loadStorage';

// const APP_ID = 'VyejpXSV5hDfcxFprl8o';
const APP_ID = 'saW1s3gzIypFllIkOa1E';

const likedRecipes = getLocalStorage();

const refreshLikes = (foodId, index) => {
  LikesAPI.refreshItemLikes(APP_ID, foodId).then((data) => {
    likedRecipes[index].likes = data.likes;
    setLocalStorage(likedRecipes);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  displayList(likedRecipes);
  const likeButtons = document.querySelectorAll('#like-button');

  likeButtons.forEach((btn, index) => {
    const { foodId } = likedRecipes[index];
    btn.addEventListener('click', async () => {
      await LikesAPI.giveLike(APP_ID, foodId).then((data) => {
        if (data === 201) {
          refreshLikes(foodId, index);
        }
      }).then(setTimeout(() => {
        document.location.reload();
      }, 1200));
    });
  });
});
