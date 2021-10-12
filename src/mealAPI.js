class ApiData {
  static randomMeal = () => new Promise((resolve, reject) => {
    if (resolve) {
      return resolve(
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
          .then((response) => response.json())
          .then((json) => json),
      );
    }
    return reject();
  });
}

export default ApiData;
