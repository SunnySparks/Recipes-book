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

module.exports = { getLocalStorage, setLocalStorage };
