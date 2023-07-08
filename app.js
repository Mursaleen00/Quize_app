// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3_jU8SxU600mdGfdfH7d5YHh9sfe5NCg",
  authDomain: "quize-app-d2db3.firebaseapp.com",
  projectId: "quize-app-d2db3",
  storageBucket: "quize-app-d2db3.appspot.com",
  messagingSenderId: "961895201965",
  appId: "1:961895201965:web:1f67c50e790352bf07da24",
  measurementId: "G-66H35JRD4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);



let btn = document.getElementById('btn');
btn.addEventListener('click', ()=>{

let email = document.getElementById('email').value
let password = document.getElementById('pass').value

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });

})



btn.addEventListener('click', ()=>{

  
let email = document.getElementById('email_si').value
let password = document.getElementById('pass_si').value

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
})