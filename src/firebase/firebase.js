import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpPdG0XhNLt6BZ0MUFInA9RkqkYQ6svCQ",
  authDomain: "reactuserdata-32c49.firebaseapp.com",
  databaseURL: "https://reactuserdata-32c49-default-rtdb.firebaseio.com",
  projectId: "reactuserdata-32c49",
  storageBucket: "reactuserdata-32c49.appspot.com",
  messagingSenderId: "922484304836",
  appId: "1:922484304836:web:7299f590a5ed23c5ce9291",
  measurementId: "G-3QB18S76M1",
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
