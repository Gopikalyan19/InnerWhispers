
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
  import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC8hod5ESx58u2c9gb3TS6tlMnldGfETxI",
    authDomain: "innerwhispers-9e342.firebaseapp.com",
    projectId: "innerwhispers-9e342",
    storageBucket: "innerwhispers-9e342.appspot.com",
    messagingSenderId: "622290166230",
    appId: "1:622290166230:web:f8fa733299b7bffebe4477",
    measurementId: "G-QXYCXHTXPY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

 
  // inputs 
 
  submit.addEventListener("click", function(){
    event.preventDefault();
    const email = document.getElementById('email').Value;
    const password =  document.getElementById ('password').Value;
    const submit = document.getElementById('submit');
 const auth = getAuth();
 const db = getFirestore();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    const userData = {
      email: user.email,
      password: user.password,

    };
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  })
