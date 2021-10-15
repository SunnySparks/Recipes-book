import './popupStyle.css';

import ApiData from './mealAPI';
import commentsApi from './commentsAPI';

const wrapper = document.querySelector('.main-container');
const appID = 'saW1s3gzIypFllIkOa1E';

const popUp = (foodId) => {
  const parentContainer = document.createElement('div');
  const container = document.createElement('section');
  const popupCont = document.createElement('div');
  const popupBox = document.createElement('div');
  const title = document.createElement('h4');
  const photo = document.createElement('IMG');
  const close = document.createElement('div');
  close.classList.add('text-right');
  close.setAttribute('id', 'close-button');
  close.innerHTML += '<i class="far fa-times-circle"></i>';

  const footer = document.querySelector('.footer');
  const listItemsContainer = document.querySelector('.container');

  close.addEventListener('click', async () => {
    parentContainer.remove();
    footer.classList.add('d-flex');
    footer.classList.remove('d-none');
    listItemsContainer.classList.remove('recipe-section');
    document.body.style.overflowY = 'scroll';
  });

  popupBox.classList.add('ml-auto', 'mr-auto', 'pb-5');
  popupBox.append(close, title, photo);

  parentContainer.classList.add('parent-container');
  title.classList.add('popup-title');
  photo.classList.add('popup-img');

  popupBox.classList.add('ml-auto', 'mr-auto', 'pb-5');
  popupBox.append(title, photo);

  const commentCont = document.createElement('div');
  const dataList = document.createElement('ul');
  const commentlist = document.createElement('ul');
  const commentsTitle = document.createElement('h3');
  const commentwrapper = document.createElement('li');

  dataList.classList.add('popup-info');

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

  const AddCommentbutton = document.createElement('button');
  AddCommentbutton.innerHTML += 'Add Comment';
  AddCommentbutton.type = 'submit';
  AddCommentbutton.classList.add(
    'nav-link',
    'comment-btn',
    'align-middle',
    'p-1',
  );

  buttonCont.classList.add('column', 'pt-2', 'ml-2', 'mr-2');
  buttonCont.appendChild(AddCommentbutton);

  const nameInput = document.createElement('input');
  nameInput.setAttribute('id', 'nameInput');
  nameInput.setAttribute('placeholder', 'Name');
  nameInput.classList.add('form-control', 'm-2');
  nameInput.required = true;
  const commentArea = document.createElement('textarea');
  commentArea.setAttribute('id', 'comment');
  commentArea.setAttribute('placeholder', 'Leave a comment');
  commentArea.classList.add('form-control', 'm-2', 'form-c');
  commentArea.required = true;

  ApiData.getMeal(foodId).then((data) => {
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

    comm.classList.add('popup-tags');

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

    const filler = () => {
      commentsApi.fetchRecipes(numero, appID).then((data) => {
        try {
          data.forEach((comment) => {
            commentsTitle.innerHTML = `Comments(${data.length})`;
            const commentText = comment.comment;
            const commentDate = comment.creation_date;
            const commentName = comment.username;
            commentwrapper.innerHTML += `
              <li class="text-justify p-2">${commentDate} ${commentName}: ${commentText}</li>`;
            commentlist.appendChild(commentwrapper);
          });
        } catch {
          data = [];
        }
      });
    };

    filler();

    const ingred = document.createElement('li');
    ingred.classList.add('popup-ingred');
    const ingredients = [
      [info.strIngredient1, info.strMeasure1],
      [info.strIngredient2, info.strMeasure2],
      [info.strIngredient3, info.strMeasure3],
      [info.strIngredient4, info.strMeasure4],
      [info.strIngredient5, info.strMeasure5],
      [info.strIngredient6, info.strMeasure6],
      [info.strIngredient7, info.strMeasure7],
      [info.strIngredient8, info.strMeasure8],
      [info.strIngredient9, info.strMeasure9],
      [info.strIngredient10, info.strMeasure10],
      [info.strIngredient11, info.strMeasure11],
      [info.strIngredient12, info.strMeasure12],
      [info.strIngredient13, info.strMeasure13],
      [info.strIngredient14, info.strMeasure14],
      [info.strIngredient15, info.strMeasure15],
      [info.strIngredient16, info.strMeasure16],
      [info.strIngredient17, info.strMeasure17],
      [info.strIngredient18, info.strMeasure18],
      [info.strIngredient19, info.strMeasure19],
      [info.strIngredient20, info.strMeasure20],
    ];

    const filteredIng = ingredients.filter(
      (ingredient) => ingredient[0] !== '',
    );

    filteredIng.forEach((element) => {
      const ingredContainer = document.createElement('p');
      ingredContainer.innerHTML += `
             * ${element[0]}: ${element[1]}.
            `;
      ingred.appendChild(ingredContainer);
    });

    dataList.appendChild(ingred);

    const inst = document.createElement('li');
    inst.innerHTML += `${instructions}`;
    dataList.appendChild(inst);

    AddCommentbutton.addEventListener('click', async () => {
      const inputInformation = {
        item_id: numero,
        username: nameInput.value,
        comment: commentArea.value,
      };
      if (inputInformation.username !== '' && inputInformation.comment !== '') {
        await commentsApi.postComment(inputInformation, appID).then(
          setTimeout(() => {
            document.location.reload();
          }, 1000),
        );
      }
    });
  });

  formInside.classList.add('row');
  formInside.append(nameInput, commentArea, buttonCont);

  formCont.classList.add('p-2');
  formCont.appendChild(formInside);
  socialCont.appendChild(formCont);

  container.classList.add('container', 'popup');

  container.append(popupCont, socialCont);
  parentContainer.appendChild(container);
  wrapper.appendChild(parentContainer);
};

export default popUp;
