class LikesAPI {
    static giveLike = (appId, itemId) => new Promise((resolve, reject) => {
      if (resolve) {
        return resolve(
          fetch(
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
          ).then((response) => response.status),
        );
      }
      return reject();
    })

    static refreshItemLikes = (appId, itemId) => new Promise((resolve, reject) => {
      if (resolve) {
        return resolve(
          fetch(
            `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`,
          )
            .then((response) => response.json())
            .then((json) => json.find((obj) => obj.item_id === itemId)),
        );
      }
      return reject();
    });
}


class commentsApi {

    static fetchRecipes = (item, appID) => new Promise((resolve, reject) =>{
  
        if(resolve) {
            return resolve(
            fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments?item_id=${item}`,
            )
            .then((res) => res.json())
            .then((json) => json)
            
            )

          } return reject();
    });

    static postComment = (datos, appID) => new Promise((resolve, reject) =>{
        if(resolve) {
            return resolve(
                fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments`, {
                    method: 'POST',
                    body: JSON.stringify(datos),
                    headers: {
                      'Content-type': 'application/json; charset=UTF-8',
                    },
                    })           
            )

          } return reject();
    });
    
}


module.exports = LikesAPI;
//module.exports = sendToApi();
module.exports = commentsApi;