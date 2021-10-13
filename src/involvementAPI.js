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

const sendToApi = async (id, name) => {
 /*
    //const comment;
  const commentData = { id, name, comment };

  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(commentData),
    });
    console.log(body);
  } catch (error) {
    throw new Error(error.message);
  }*/
};

class commentsApi {

    static fetchRecipes = (item) => new Promise((resolve, reject) =>{
  
        if(resolve) {
            return resolve(
            fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/saW1s3gzIypFllIkOa1E/likes`,
            )
            .then((res) => res.json())
            .then((json) => json)
            
            )

          } return reject();
    });
    
}


module.exports = LikesAPI;
//module.exports = sendToApi();
module.exports = commentsApi;