import firebase from 'firebase';

try{
   var config = {
    apiKey: "AIzaSyDg_btnH9htQKgmuu-YsgawJv5y0gdtqkg",
    authDomain: "my-todo-6c523.firebaseapp.com",
    databaseURL: "https://my-todo-6c523.firebaseio.com",
    projectId: "my-todo-6c523",
    storageBucket: "my-todo-6c523.appspot.com",
    messagingSenderId: "237933104466"
  };

firebase.initializeApp(config);
}catch(e){

}


export var firebaseRef = firebase.database().ref();
export default firebase;
