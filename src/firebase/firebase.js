import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASURMENT_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database
// //   .ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];

// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val(),
// //     });
// //   });
// //   console.log(expenses);
// // });

// // database.ref('expenses').push({
// //   description: 'Rent 2',
// //   note: 'This mounth rent',
// //   amount: 250,
// //   createdAt: 10000,
// // });

// // database.ref('notes/-MYxtSkewKx8VyiCXSMb').remove();

// // database.ref('notes').push({
// //   title: 'Course Topics',
// //   body: 'Some crazy shit',
// // });

// // database.ref().on('value', (snapshot) => {
// //   console.log(
// //     `${snapshot.val().name} is a ${snapshot.val().job.title} at ${
// //       snapshot.val().job.company
// //     }`
// //   );
// // });

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // }, (e) => {
// //   console.log('Error with data fetching', e)
// // });

// // setTimeout(() => {
// //   database.ref('age').set(29);
// // }, 3500);

// // setTimeout(() => {
// //   database.ref().off(onValueChange);
// // }, 7000);

// // setTimeout(() => {
// //   database.ref('age').set(30);
// // }, 10500);

// // database
// //   .ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('Error fatching data', e);
// //   });

// // database
// //   .ref()
// //   .set({
// //     name: 'Pawel Be',
// //     age: 28,
// //     job: {
// //       title: 'Developer',
// //       company: 'Company',
// //     },
// //     stressLevel: 6,
// //     location: {
// //       city: 'BSK',
// //       country: 'Poland',
// //     },
// //   })
// //   .then(() => {
// //     console.log('Data is saved!');
// //   })
// //   .catch((e) => {
// //     console.log('This failed.', e);
// //   });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Warsaw',
// // });

// // database
// //   .ref('isSingle')
// //   .remove()
// //   .then(() => {
// //     console.log('Data removed.');
// //   })
// //   .catch((e) => {
// //     console.log('This failed: ', e);
// //   });
