import './popupStyle.css';
import ApiData from './mealAPI.js';

const wrapper = document.querySelector(".main-container");
const footer = document.getElementsByClassName("py-3");                                                               
const comments = ['one', 'two', 'three'];
const popUp = () => {



    const container = document.createElement('section');
    const popupCont = document.createElement('div');
    const popupBox = document.createElement('div');
    const title = document.createElement('h4');
    const photo = document.createElement('IMG');
    const textCont = document.createElement('div');
    const heartCont = document.createElement('h1');


    ApiData.randomMeal().then((data) => {
        let info = data.meals[0];
        let foodName = info.strMeal;
        let foodImg = info.strMealThumb;
        let foodTag = info.strTags;
        let numero = info.idMeal;
        let instructions = info.strInstructions;

        title.innerHTML += foodName;
        title.classList.add('text-center');
    
        photo.src = foodImg;

        const comm = document.createElement('li');
        comm.innerHTML += `${foodTag}`;
        list.appendChild(comm);


        const ingred = document.createElement('li');
        let ingredients = [
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
            info.strMeasure20]            
        ]
        ingredients.forEach(element => 
            console.log(element[0]));
        const filteredIng = ingredients.filter(ingredient => ingredient[0] !== '');
        console.log('filtereding', filteredIng);
        

        filteredIng.forEach(element => {
            let ingredContainer = document.createElement('p');
            ingredContainer.innerHTML += `
            ${element[0]}: ${element[1]}.
            `
            ingred.appendChild(ingredContainer);
        });

        
        list.appendChild(ingred);


        const inst = document.createElement('li');
        inst.innerHTML += `${instructions}`;
        list.appendChild(inst);

        let array = Object.entries(info);
        console.log(array);

        
    });



    heartCont.classList.add('float-left');
    heartCont.innerHTML += '<i class="fas fa-heart"></i>';

    const likesCounter = document.createElement('h4');
    likesCounter.classList.add('float-right');
    likesCounter.innerHTML += 'X Likes';

    textCont.classList.add('clearfix', 'pt-5');
    textCont.append(heartCont, likesCounter);

    popupBox.classList.add('ml-auto', 'mr-auto', 'pb-5');
    popupBox.append(title, photo, textCont);

    const commentCont = document.createElement('div');
    const list = document.createElement('ul');


    commentCont.classList.add('text-justify');
    commentCont.appendChild(list);

    popupCont.classList.add('p-3', 'm-2', 'd-flex', 'flex-column');
    popupCont.append(popupBox, commentCont);

    const socialCont = document.createElement('div');
    const formCont = document.createElement('form');
    const formInside = document.createElement('div');
    const buttonCont = document.createElement('div');

    const button = document.createElement('button');
    button.classList.add('nav-link', 'comment-btn', 'align-middle', 'p-1');

    buttonCont.classList.add('column', 'pt-4');
    buttonCont.appendChild(button);

    const commentArea = document.createElement('textarea');
    commentArea.classList.add('form-control', 'ml-2', 'ml-2', 'form-c');

    formInside.classList.add('row');
    formInside.append(buttonCont, commentArea);

    formCont.classList.add('p-2');
    formCont.appendChild(formInside);
    socialCont.appendChild(formCont);
    
    container.classList.add('container', 'popup');

    container.append(popupCont, socialCont);
    wrapper.appendChild(container);

}



export { popUp };