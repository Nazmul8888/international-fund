// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJeeQ87o6vevj-6aZbh25e7wwTRbAKK_0",
  authDomain: "international-fund-project.firebaseapp.com",
  projectId: "international-fund-project",
  storageBucket: "international-fund-project.appspot.com",
  messagingSenderId: "922281984739",
  appId: "1:922281984739:web:1c4f29190828bae3ae7bd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;