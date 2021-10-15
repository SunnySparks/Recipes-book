export default class commentsApi {
    static fetchRecipes = (item, appID) => new Promise((resolve, reject) => {
      if (resolve) {
        return resolve(
          fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments?item_id=${item}`)
            .then((res) => res.json())
            .then((json) => json),

        );
      } return reject();
    });

    static postComment = (datos, appID) => new Promise((resolve, reject) => {
      if (resolve) {
        return resolve(
          fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments`, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }),
        );
      } return reject();
    });
}
