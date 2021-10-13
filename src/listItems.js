export default async function displayList(likedRecipes) {
  const mainContainer = document.querySelector('.main-container');
  const listContainer = document.createElement('div');
  const ul = document.createElement('ul');

  likedRecipes.forEach((recipe) => {
    const li = document.createElement('li');
    const recipeMainContainer = document.createElement('div');
    const aboutRecipeContainer = document.createElement('div');
    listContainer.classList.add('container');
    ul.classList.add('row');
    ul.classList.add('recipe-container');
    li.classList.add('item-container', 'p-3', 'm-2', 'd-flex', 'flex-column');
    li.id = recipe.foodId;
    recipeMainContainer.innerHTML = `
      <h4 class="text-center">${recipe.foodName}</h4>
      <img src="${recipe.foodImg}" alt="" class="food-img img-thumbnail">
      <div class="clearfix">
          <span class="float-left">
              <i id="like-button" class="fas fa-heart"></i>
          </span>
          <span class="float-right">
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
}
