import './popupStyle.css';

import ApiData from './mealAPI.js';
import commentsApi from './involvementAPI';

const wrapper = document.querySelector('.main-container');
// const footer = document.getElementsByClassName('py-3');
// const comments = ['one', 'two', 'three'];
const appID = 'saW1s3gzIypFllIkOa1E';
const header = document.getElementsByClassName('header');

const popUp = () => {

  const container = document.createElement('section');
  const popupCont = document.createElement('div');
  const popupBox = document.createElement('div');
  const title = document.createElement('h4');
  const photo = document.createElement('IMG');

  popupBox.classList.add('ml-auto', 'mr-auto', 'pb-5');
  popupBox.append(title, photo);

  const commentCont = document.createElement('div');
  const dataList = document.createElement('ul');
  const commentlist = document.createElement('ul');
  const commentsTitle = document.createElement('h3');

  commentlist.append(commentsTitle);

  commentCont.classList.add('text-justify');
  commentCont.append(dataList, commentlist);

  popupCont.classList.add('p-3', 'm-2', 'd-flex', 'flex-column');
  popupCont.append(popupBox, commentCont);

  const socialCont = document.createElement('div');

  const formCont = document.createElement('form');

  formCont.setAttribute('id', 'form');

  const formInside = document.createElement('div');
  const buttonCont = document.createElement('div');

  const button = document.createElement('button');
  button.innerHTML += 'Add Comment';
  button.classList.add('nav-link', 'comment-btn', 'align-middle', 'p-1');

  buttonCont.classList.add('column', 'pt-2', 'ml-2', 'mr-2');
  buttonCont.appendChild(button);

  const nameInput = document.createElement('input');
  nameInput.setAttribute('id', 'nameInput');
  nameInput.setAttribute('placeholder', 'Name');
  nameInput.classList.add('form-control', 'm-2');
  const commentArea = document.createElement('textarea');
  commentArea.setAttribute('id', 'comment');
  commentArea.setAttribute('placeholder', 'Leave a comment');
  commentArea.classList.add('form-control', 'm-2', 'form-c');

  ApiData.getMeal('52796').then((data) => {
    // ApiData.randomMeal().then((data) => {
    const info = data.meals[0];
    const foodName = info.strMeal;
    const foodImg = info.strMealThumb;
    const foodTag = info.strTags;
    const numero = info.idMeal;
    const instructions = info.strInstructions;

    title.innerHTML += foodName;
    title.classList.add('text-center');

    photo.src = foodImg;

    const comm = document.createElement('li');

    if (foodTag !== null) {
      const splitTags = foodTag.split(',');
      splitTags.forEach((tag) => {
        const tagCont = document.createElement('h4');
        tagCont.innerHTML += `#${tag} `;
        comm.appendChild(tagCont);
      });
    } else {
      comm.innerHTML += 'Delicious Food';
    }

    dataList.appendChild(comm);

    commentsApi.fetchRecipes(numero, appID).then((data) => {
      data.forEach((comment) => {
        
        commentsTitle.innerHTML = `Comments(${data.length})`;
        const commentText = comment.comment;
        const commentDate = comment.creation_date;
        const commentName = comment.username;
        const commentwrapper = document.createElement('li');
        commentwrapper.innerHTML += `
        <li class="text-justify p-2">${commentDate} ${commentName}: ${commentText}</li>`;
        commentlist.appendChild(commentwrapper);
      });
    });

    const ingred = document.createElement('li');
    const ingredients = [
      [info.strIngredient1,
        info.strMeasure1],
      [info.strIngredient2,
        info.strMeasure2],
      [info.strIngredient3,
        info.strMeasure3],
      [info.strIngredient4,
        info.strMeasure4],
      [info.strIngredient5,
        info.strMeasure5],
      [info.strIngredient6,
        info.strMeasure6],
      [info.strIngredient7,
        info.strMeasure7],
      [info.strIngredient8,
        info.strMeasure8],
      [info.strIngredient9,
        info.strMeasure9],
      [info.strIngredient10,
        info.strMeasure10],
      [info.strIngredient11,
        info.strMeasure11],
      [info.strIngredient12,
        info.strMeasure12],
      [info.strIngredient13,
        info.strMeasure13],
      [info.strIngredient14,
        info.strMeasure14],
      [info.strIngredient15,
        info.strMeasure15],
      [info.strIngredient16,
        info.strMeasure16],
      [info.strIngredient17,
        info.strMeasure17],
      [info.strIngredient18,
        info.strMeasure18],
      [info.strIngredient19,
        info.strMeasure19],
      [info.strIngredient20,
        info.strMeasure20],
    ];

    const filteredIng = ingredients.filter((ingredient) => ingredient[0] !== '');

    filteredIng.forEach((element) => {
      const ingredContainer = document.createElement('p');
      ingredContainer.innerHTML += `
            ${element[0]}: ${element[1]}.
            `;
      ingred.appendChild(ingredContainer);
    });

    dataList.appendChild(ingred);

    const inst = document.createElement('li');
    inst.innerHTML += `${instructions}`;
    dataList.appendChild(inst);

    // const array = Object.entries(info);

    /*formCont.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputInformation = {
        item_id: numero,
        username: nameInput.value,
        comment: commentArea.value,
      };
      commentsApi.postComment(inputInformation, appID);
    });*/

    button.addEventListener('click', async () => { 
        const inputInformation = {
            item_id: numero,
            username: nameInput.value,
            comment: commentArea.value,
          };
        await commentsApi.postComment(inputInformation, appID); })
        .then( setTimeout(() => { 
            document.location.reload(); }, 1500), );
  });

  formInside.classList.add('row');
  formInside.append(nameInput, commentArea, buttonCont);

  formCont.classList.add('p-2');
  formCont.appendChild(formInside);
  socialCont.appendChild(formCont);

  container.classList.add('container', 'popup');

  container.append(popupCont, socialCont);
  wrapper.appendChild(container);
};

export { popUp };