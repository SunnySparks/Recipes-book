class ApiData {
  static randomMeal = async () => {
    const res = () => fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((json) => json);
    const data = await res();
    return data;
  };

  static getMeal = async (id) => {
    const res = () => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((json) => json);
    const data = await res();
    return data;
  };
}

export default ApiData;
