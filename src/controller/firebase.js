    export const db = ()=>{
    return firebase.firestore();
  }


  export const exit = () => {
    return firebase.auth().signOut()
  };
  
  // Save names users loggedOn with Google and Facebook
  export const createUser = (cred) => {
      return firebase.firestore().collection('users').doc(cred.user.uid).set({
          name: cred.user.displayName
      })
  }
  
  export const viewPostdb = (callback, suffix,col) => {
      firebase.firestore().collection("Productos").doc(suffix).collection(col).onSnapshot((querySnapshot) => {
          const data = [];
          querySnapshot.forEach((doc) => {
              data.push({
                  id: doc.id,
                  ...doc.data()
              });
          });
         callback(data);
      });
  };

export  const frutasArr= ()=>{
    firebase.firestore().collection("Productos").doc('Frutas').collection('TodoFrutas')
    .get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        return (doc.data())
      });
    })
}


//   export const deletePost = (postId) => {
//       return firebase.firestore().collection("posts").doc(postId).delete();
//   }
  
//   export const updatePost = (postId, postText, modePost) => {
//       return firebase.firestore().collection("posts").doc(postId).update({
//           texto: postText,
//           state: modePost,
//       })
//   };
