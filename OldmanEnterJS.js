console.log(firebase)
const auth = firebase.auth();
const user = firebase.auth.currentUser;


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user.uid)
  } else {
    // No user is signed in.
  }
});

alert("here")
console.log(firebase.auth().currentUser)






  //SingUp - Function

    function singUp()
    {
       
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
        alert("תודה שהצטרפת :)");
    }
  
  
    //SingIn - Function

    function signIn()
    {
      var email = document.getElementById("email");
      var password = document.getElementById("password");

       const promise = auth.signInWithEmailAndPassword(email.value, password.value);
       promise.catch(e => alert(e.message));

        alert("התחברת !" + email.value );
        
    }

    function signOut()
    {
      auth.signOut();
      alert("התנתקת !")
      location.replace("OldmanSignUp.html")
    }

    /*
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        
        alert("משתמש מחובר :" + email.value)
        location.replace("OldmanEnter.html")
      } else {
        // No user is signed in.
        alert("2משתמש לא מחובר !")
        
      }
    });
    */