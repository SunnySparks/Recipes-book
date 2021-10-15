export const getLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('LikedRecipes'));
  if (data === null) {
    localStorage.setItem('LikedRecipes', JSON.stringify([]));
    return [];
  }
  return data;
};

export const setLocalStorage = (LikedRecipes) => {
  localStorage.setItem('LikedRecipes', JSON.stringify(LikedRecipes));
};
