import './style.css';

import displayList from './listItems';
import LikesAPI from './involvementAPI';
import { getLocalStorage, setLocalStorage } from './loadStorage';

const APP_ID = 'saW1s3gzIypFllIkOa1E';

const likedRecipes = getLocalStorage();

const randomDishesBtn = document.querySelector('#random-dishes');
const recipesPageBtn = document.querySelector('#recipes');

const refreshLikes = (foodId, index) => {
  LikesAPI.refreshItemLikes(APP_ID, foodId).then((data) => {
    likedRecipes[index].likes = data.likes;
    setLocalStorage(likedRecipes);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const recipesAmount = document.querySelector('#recipes');
  displayList(likedRecipes).then((data) => {
    recipesAmount.innerText = `Recipes (${data})`;
    const likeCounter = document.querySelectorAll('#like-counter');
    likeCounter.forEach(async (counter, index) => {
      const { foodId } = likedRecipes[index];
      await LikesAPI.refreshItemLikes(APP_ID, foodId).then((data) => {
        if (data !== undefined) {
          counter.innerText = `${data.likes} Likes`;
          likedRecipes[index].likes = data.likes;
          setLocalStorage(likedRecipes);
        } else {
          data = 0;
          likedRecipes[index].likes = data;
        }
      });
    });
    const likeButtons = document.querySelectorAll('#like-button');
    likeButtons.forEach((btn, index) => {
      const { foodId } = likedRecipes[index];
      btn.addEventListener('click', async () => {
        await LikesAPI.giveLike(APP_ID, foodId)
          .then((data) => {
            if (data === 201) {
              refreshLikes(foodId, index);
            }
          })
          .then(
            setTimeout(() => {
              document.location.reload();
            }, 1500),
          );
      });
    });
    const commentButtons = document.querySelectorAll('#comment-button');
    commentButtons.forEach((btn, index) => {
      const { foodId } = likedRecipes[index];
      btn.addEventListener('click', async () => {
        console.log(`Passing parameter Food Id: ${foodId}`);
      });
    });
  });

  randomDishesBtn.addEventListener('click', async () => {
    const listItemsContainer = document.querySelector('.container');
    await listItemsContainer.classList.add('d-none');
  });
  recipesPageBtn.addEventListener('click', async () => {
    const listItemsContainer = document.querySelector('.container');
    await listItemsContainer.classList.remove('d-none');
  });
});
