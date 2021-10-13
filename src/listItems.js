import ApiData from './mealAPI';
import { setLocalStorage } from './loadStorage';

export default async function displayList(likedRecipes) {
  let counter = 0;
  const mainContainer = document.querySelector('.main-container');
  const listContainer = document.createElement('div');
  const ul = document.createElement('ul');

  if (likedRecipes.length <= 0) {
    const foodTag = 'Awesome Food';
    for (let i = 0; i < 9; i += 1) {
      /* eslint-disable no-await-in-loop */
      await ApiData.randomMeal().then((data) => {
        const Food = {
          foodId: data.meals[0].idMeal,
          foodName: data.meals[0].strMeal,
          foodImg: data.meals[0].strMealThumb,
          foodTag:
            data.meals[0].strTags === null ? foodTag : data.meals[0].strTags,
          likes: 0,
        };
        likedRecipes.push(Food);
      });
      /* eslint-enable no-await-in-loop */
    }
    setLocalStorage(likedRecipes);
  }

  likedRecipes.forEach((recipe, index) => {
    const li = document.createElement('li');
    const recipeMainContainer = document.createElement('div');
    const aboutRecipeContainer = document.createElement('div');
    listContainer.classList.add('container');
    ul.classList.add('row');
    ul.classList.add('recipe-container');
    li.classList.add('item-container', 'p-3', 'm-2', 'd-flex', 'flex-column');
    li.id = index;
    counter += 1;
    recipeMainContainer.innerHTML = `
      <h4 class="text-center">${recipe.foodName}</h4>
      <img src="${recipe.foodImg}" alt="" class="food-img img-thumbnail">
      <div class="clearfix">
          <span class="float-left">
              <i id="like-button" class="fas fa-heart"></i>
          </span>
          <span id="like-counter" class="float-right">
              ${recipe.likes} Likes
          </span>
      </div>`;
    aboutRecipeContainer.classList.add('tex-justify');
    aboutRecipeContainer.innerHTML = `
          <p>${recipe.foodTag}</p>
      <button id="comment-button" type="button" class="nav-link badge">Comments</button>`;

    li.appendChild(recipeMainContainer);
    li.appendChild(aboutRecipeContainer);
    ul.appendChild(li);
  });

  listContainer.appendChild(ul);
  mainContainer.appendChild(listContainer);
  return counter;
}
