//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyC9ua2KoFFYPg1aJ3_oFzUAgZeqvIYvoAs",
    authDomain: "fir-comp1800-8c091.firebaseapp.com",
    projectId: "fir-comp1800-8c091",
    storageBucket: "fir-comp1800-8c091.appspot.com",
    messagingSenderId: "156433541228",
    appId: "1:156433541228:web:507ce600bdba08540ad049"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

