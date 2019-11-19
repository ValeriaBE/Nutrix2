

// export const registerUser = (emailSignIn, passwordSignIn) => {
//     return firebase.auth().createUserWithEmailAndPassword(emailSignIn, passwordSignIn)
//   };
  
//   export const loginUser = (emailLogIn, passwordLogIn) => {
//     return firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn)
//   };
  
  export const db = ()=>{
    return firebase.firestore();
  }


  
//   export const getUser = () => {
//     return firebase.auth().currentUser;
//   }
  
//   export const activeUser = (u2) => {
//       return firebase.auth().onAuthStateChanged((u2));
//   }
  
  export const exit = () => {
    return firebase.auth().signOut()
  };
  
  // Save names users loggedOn with Google and Facebook
  export const createUser = (cred) => {
      return firebase.firestore().collection('users').doc(cred.user.uid).set({
          name: cred.user.displayName
      })
  }
  
  export const viewPostdb = (callback) => {
      firebase.firestore().collection("Productos").doc('Frutas').collection('TodoFrutas').onSnapshot((querySnapshot) => {
          const data = [];
          querySnapshot.forEach((doc) => {
              data.push({
                  id: doc.id,
                  ...doc.data()
              });
          });
         callback(data[0]);
      });
  };


  
//   export const deletePost = (postId) => {
//       return firebase.firestore().collection("posts").doc(postId).delete();
//   }
  
//   export const updatePost = (postId, postText, modePost) => {
//       return firebase.firestore().collection("posts").doc(postId).update({
//           texto: postText,
//           state: modePost,
//       })
//   };
