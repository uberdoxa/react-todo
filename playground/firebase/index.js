import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDg_btnH9htQKgmuu-YsgawJv5y0gdtqkg",
    authDomain: "my-todo-6c523.firebaseapp.com",
    databaseURL: "https://my-todo-6c523.firebaseio.com",
    projectId: "my-todo-6c523",
    storageBucket: "my-todo-6c523.appspot.com",
    messagingSenderId: "237933104466"
  };

firebase.initializeApp(config);
var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
}).then(()=>{
  console.log('Set Worked');
},(e)=>{
  console.log('Set Failed for whatever reason ',e);
})

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added',(snapshot)=>{
  console.log('child_added', snapshot.key,snapshot.val());
});

var newTodosRef = todosRef.push({ text: 'Feed the cat'});

todosRef.push({ text: 'Clean the pool'});

console.log('REFERE :', newTodosRef);











// var notesRef = firebaseRef.child('notes');

// notesRef.on('child_added',(snapshot)=>{
//   console.log('child_added' snapshot.key,snapshot.val());
// });

// notesRef.on('child_changed',(snapshot)=>{
//   console.log('child_added', snapshot.key,snapshot.val());
// });

// notesRef.on('child_removed',(snapshot)=>{
//   console.log('child_added' snapshot.key,snapshot.val());
// });
// // var newNoteRef = notesRef.push().set({ text: 'Walk the dog'});

// var newNoteRef = notesRef.push({ text: 'Walk the dog'});

// console.log('New todo id', newNoteRef.key);
















// firebase.child('user').on('value',(snapshot)=>{
//   console.log('User ref changed',  snapshot.val());
// });

// firebaseRef.update({'user/name': 'Jurman'});



// firebaseRef.update({'app/name': 'Not todo'});


// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value', snapshot.val());
// });

// firebaseRef.update({isRunning: false});

// firebaseRef.child('app').once('value').then((snapshot)=>{
//   console.log('Got entire database', snapshot.key,snapshot.val())
// },(e)=>{
//   console.log('Unable to fetch value', e);
// });

// firebaseRef.once('value').then((snapshot)=>{
//   console.log('Got entire database', snapshot.val())
// },(e)=>{
//   console.log('Unable to fetch value', e);
// });

// firebaseRef.child('app/name')remove();
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// firebaseRef.update({
//   isRunning: null
// });

// firebaseRef.child('user/age').remove();



// firebaseRef.update({
//   'app/name': 'New AppName',
//   'user/name': 'New UserName'
// });

// firebaseRef.child('app').update({
//   name: 'whatever'
// });

// firebaseRef.child('user').update({
//   name: 'whatever user'
// });





// firebaseRef.set({
//   appName: 'Todo Apllication'
// });

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Apllication'
// });

// firebaseRef.child('app').update({
//   name: 'Todo Apllication'
// }).then(()=>{
//   console.log('update Worked');
// },(e)=>{
//   console.log('update Failed!');
// });






