alert("volenteer");





  //SingUp - Function

    function signUp()
    {
       
      
      var email = document.getElementById("email");
      var password = document.getElementById("password");
      if (validate() == true)
      {
        alert("תודה שהצטרפת :)");

        registerNewUser(email.value,password.value);
      
      }
      else
      {
        alert("back to page");
        
      }
  }
  

    function registerNewUser(email,password)
    {
        auth.createUserWithEmailAndPassword(email, password).then((loggedUser) => {
            // Signed in with email and password, now insert details to DB
            var userId = loggedUser.user.uid
            var firstName = document.getElementById("firstName").value
            var lastName = document.getElementById("lastName").value
    
            var newUser = {
                userId: userId,
                email: email,
                firstName: firstName,
                lastName: lastName,
                password: password
            }
            //insert user details to DB
            console.log("writen3")
            writeUserData(newUser, userId)
            console.log("writen4")
        })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
                
            });
    }

            
        function writeUserData(user, userId) {
            database.ref('VolenteerUsers/' + userId).set(user, (error) => {
                if (error) {
                    alert("Something went wrong..." + error.errorMessage)
                } else {
                    alert("Sign up complete!")
                    location.replace("VolenteerEnter.html")
                    
                }
            })
        }
  
    //SingIn - Function

    function signIn()
    {
      var email = document.getElementById("email");
      var password = document.getElementById("password");

       const promise = auth.signInWithEmailAndPassword(email.value, password.value);
       promise.catch(e => alert(e.message));

        alert("התחברת !" + email.value );
        location.replace("VolenteerEnter.html")
        
    }

    function signOut()
    {
      auth.signOut();
      alert("התנתקת !")
      location.replace("XXXXX")
    }

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        
        alert("משתמש מחובר :" )
        location.replace("VolenteerEnter.html");
        
      } else {
        // No user is signed in.
        alert("משתמש לא מחובר3 !")
        
      }
    });

    function validate(){
      var remember = document.getElementById('vehicle1');
      if (remember.checked){
          
          return true;
      }else{
          alert("אנא אשר את התקנון")
          return false;
      }
    }
    
