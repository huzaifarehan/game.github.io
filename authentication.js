
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf7kvDMsmhWCyx7MUFQ9AJz0jd5WjXapU",
  authDomain: "popupgame-30fef.firebaseapp.com",
  projectId: "popupgame-30fef",
  storageBucket: "popupgame-30fef.appspot.com",
  messagingSenderId: "560481658936",
  appId: "1:560481658936:web:8719e4b517deb7721fdecd",
  measurementId: "G-0RKE0BCQMF"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
//   const database = firebase.firestore();


//  sign in function connect with firebase

const login = document.getElementById('login');

function signInFormFunc(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      login.reset();
      window.location.href = "level1.html"
      var user = userCredential.user;
   
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      let wrong = document.getElementById('wrong');
      wrong.innerHTML = `<div class="alert alert-warning" role="alert">
      ${error.message}
                                                      </div>`;
      setTimeout(() => {
        wrong.innerHTML = "";
      }, 5000);
    });
}

// get sign in form from DOM

let signInForm = document.getElementById('signInForm');
(signInForm) ? signInForm.addEventListener('click', (e) => {
  e.preventDefault();
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  signInFormFunc(email, password);

}) : "";


//  sign up function connect with firebase

function signUpFormFunc(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      login.reset();
      window.location.href = "level1.html"
      var user = userCredential.user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

// // get sign up from DOM

let signUpForm = document.getElementById('signUpForm');
(signUpForm) ? signUpForm.addEventListener('click', (e) => {
  e.preventDefault();
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  signUpFormFunc(email, password);

}) : "";



// logout the user

  function logOut() {
    auth.signOut().then(() => {
      window.location.href = "index.html"
    }).catch((error) => {
    });
  }

// google sign in 

let signUpWithGoogle = document.getElementById('signUpWithGoogle');
(signUpWithGoogle) ? signUpWithGoogle.addEventListener('click', signUpWithGooglFunc): "";
function signUpWithGooglFunc() {
  var provider = new firebase.auth.GoogleAuthProvider();
 
  firebase.auth().signInWithPopup(provider)
  .then((result) => {
   
    window.location.href = "level1.html"
  }).catch((error) => {
    
  });
}

// observer of user and messages

auth.onAuthStateChanged((user) => {
  if (user) {
    

  } else {
    
  }
});
