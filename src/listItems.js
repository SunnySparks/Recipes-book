import ApiData from './mealAPI';

export default async function displayList() {
  const mainContainer = document.querySelector('.main-container');
  const listContainer = document.createElement('div');
  const ul = document.createElement('ul');
  let foodName; let foodImg; let foodTag;
  for (let i = 0; i < 9; i += 1) {
    await ApiData.randomMeal().then((data) => {
      foodName = data.meals[0].strMeal;
      foodImg = data.meals[0].strMealThumb;
      foodTag = data.meals[0].strTags;
    });
    if (foodTag === null) {
      foodTag = 'Awesome Food';
    }
    const li = document.createElement('li');
    const recipeMainContainer = document.createElement('div');
    const aboutRecipeContainer = document.createElement('div');
    listContainer.classList.add('container');
    ul.classList.add('row');
    ul.classList.add('recipe-container');
    li.classList.add('item-container', 'p-3', 'm-2', 'd-flex', 'flex-column');
    recipeMainContainer.innerHTML = `
      <h4 class="text-center">${foodName}</h4>
      <img src="${foodImg}" alt="" class="food-img img-thumbnail">
      <div class="clearfix">
          <span class="float-left">
              <i class="fas fa-heart"></i>
          </span>
          <span class="float-right">
              X Likes
          </span>
      </div>`;
    aboutRecipeContainer.classList.add('tex-justify');
    aboutRecipeContainer.innerHTML = `
          <p>${foodTag}</p>
      <button type="button" class="nav-link badge">Recipes</button>`;

    li.appendChild(recipeMainContainer);
    li.appendChild(aboutRecipeContainer);
    ul.appendChild(li);
  }
  listContainer.appendChild(ul);
  mainContainer.appendChild(listContainer);
}
