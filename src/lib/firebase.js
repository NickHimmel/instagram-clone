// import { seedDatabase } from '../seed';

var firebaseConfig = {

};

const firebase = window.firebase.initializeApp(firebaseConfig);
const { FieldValue } = window.firebase.firestore;
 
// seedDatabase(firebase);

export { firebase, FieldValue };