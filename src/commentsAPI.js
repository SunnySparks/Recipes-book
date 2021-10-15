export default class commentsApi {
  static fetchRecipes = async (item, appID) => {
    const res = () => fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments?item_id=${item}`,
    )
      .then((res) => res.json())
      .then((json) => json);
    const data = await res();
    return data;
  };

  static postComment = async (datos, appID) => {
    const res = () => fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments`,
      {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
    const data = await res();
    return data;
  };
}
