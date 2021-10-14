const getLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('LikedRecipes'));
  if (data === null) {
    localStorage.setItem('LikedRecipes', JSON.stringify([]));
    return [];
  }
  return data;
};

const setLocalStorage = (LikedRecipes) => {
  localStorage.setItem('LikedRecipes', JSON.stringify(LikedRecipes));
};

<<<<<<< HEAD
module.exports = { getLocalStorage, setLocalStorage };
=======
module.exports = { getLocalStorage, setLocalStorage };
>>>>>>> development
