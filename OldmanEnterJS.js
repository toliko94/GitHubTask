console.log(firebase)
console.log(database)
console.log(auth)






function test()
{
  console.log(auth)
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
   
    
  } else {
    alert("???")
    // No user is signed in.
  }
});
 */

