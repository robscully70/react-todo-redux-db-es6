import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDIGF6QRRWEkYpNul-fKlMn7S4TQha3_vg",
    authDomain: "todo-app-4cad7.firebaseapp.com",
    databaseURL: "https://todo-app-4cad7.firebaseio.com",
    projectId: "todo-app-4cad7",
    storageBucket: "todo-app-4cad7.appspot.com",
    messagingSenderId: "130621573006"
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
    name: 'Robert',
    age: 48
  }
});

// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'Paige'
// })

// firebaseRef.child('app').update({ name: 'My Todo' });
// firebaseRef.child('user').update({ name: 'Hailey' });

// firebaseRef.update({
//     isRunning: null
//   });
//   firebaseRef.child('user/age').remove();


// firebaseRef.child('user').on('value', (snapshot) => {
//     console.log('User ref changed', snapshot.val());
// });

// firebaseRef.child('user').update({name: 'Mike'});

// firebaseRef.child('app').update({name: 'Something Else!'});

// var todosRef = firebaseRef.child('todos');

// todosRef.on('child_added', (snapshot) => {
//   console.log('New todo added', snapshot.key, snapshot.val());
// });

// todosRef.push({
//   text: 'Todo 1'
// });

// todosRef.push({
//   text: 'Todo 2'
// });