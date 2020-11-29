
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDDyo3rtSkUIA5L9ixFqs13TulEnIPM3UI",
    authDomain: "wepo4u-project-22.firebaseapp.com",
    databaseURL: "https://wepo4u-project-22.firebaseio.com",
    projectId: "wepo4u-project-22",
    storageBucket: "wepo4u-project-22.appspot.com",
    messagingSenderId: "859760012059",
    appId: "1:859760012059:web:0aff433aea5b8dac1801be",
    measurementId: "G-CYS41V24S2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  


  const auth = firebase.auth();

    function singUp()
    {
       
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
        alert("Signed Up");
    }
  
  