export default class LikesAPI {
  static giveLike = async (appId, itemId) => {
    await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`,
      {
        method: 'POST',
        body: JSON.stringify({
          item_id: itemId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    ).then((response) => response.status);
  };

  static refreshItemLikes = async (appId, itemId) => {
    const res = () => new Promise((resolve, reject) => {
      if (resolve) {
        resolve(
          fetch(
            `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`,
          )
            .then((response) => response.json())
            .then((json) => json.find((obj) => obj.item_id === itemId)),
        );
      }
      reject();
    });
    const data = await res();
    return data;
  };
}
