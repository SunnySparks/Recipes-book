class ApiData {
  static randomMeal = async () => {
    const res = fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    let data = await res;
    data = data.json();
    return data;
  };

  static getMeal = async (id) => {
    const res = fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    let data = await res;
    data = data.json();
    return data;
  };
}

export default ApiData;
