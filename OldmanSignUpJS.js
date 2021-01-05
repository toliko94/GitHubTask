




  //SingUp - Function

    function signUp()
    {
<<<<<<< HEAD:OldmanSignUpJS.js

     
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var takanon = document.getElementById("takanon");
    
    if (validate() == true)
    {
        alert("תודה שהצטרפת :)");
        
        registerNewUser(email.value,password.value)
    }
    else
    {
      alert("מרענן דף .. אנא מלא את הפרטים מחדש");
      location.replace("OldmanSignUp.html")
    }
=======
       
      
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
>>>>>>> Boaz:VolenteerSignUpJS.js
  

    function registerNewUser(email,password)
    {
        auth.createUserWithEmailAndPassword(email, password).then((loggedUser) => {
            // Signed in with email and password, now insert details to DB
            var userId = loggedUser.user.uid
            var firstName = document.getElementById("firstName").value
            var lastName = document.getElementById("lastName").value
            var phone = document.getElementById("phone").value
    
            var newUser = {
                userId: userId,
                email: email,
                firstName: firstName,
                lastName: lastName,
                password: password,
                phone : phone
            }
            //insert user details to DB
            console.log("writen1")
            writeUserData(newUser, userId)
            console.log("writen2")
        })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
                
            });
    }

            
        function writeUserData(user, userId) {
            database.ref('OldmanUsers/' + userId).set(user, (error) => {
                if (error) {
                    alert("Something went wrong..." + error.errorMessage)
                } else {
                    alert(" ההרשמה הסתיימה!")
                    location.replace("OldmanEnter.html")
                    
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
        location.replace("OldmanEnter.html")
        
    }

    //sign Out 

    function signOut()
    {
      auth.signOut();
      alert("התנתקת !")
      location.replace("XXXXX")
    }

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        
        alert("משתמש מחובר :" + user.email )
        
      } else {
        // No user is signed in.
        alert("משתמש כרגע לא מחובר1 !")
        
      }
    });

<<<<<<< HEAD:OldmanSignUpJS.js

    //check that the checkbox is checked
    function validate(){
      var remember = document.getElementById('takanon');
      if (remember.checked)
      {
          alert("checked") ;
          return true;
      }
      else
      {
          alert("אנא לאשר את התקנון לפני ההרשמה ")
          return false;
      }
  }}
=======
    function validate(){
      var remember = document.getElementById('vehicle1');
      if (remember.checked){
          
          return true;
      }else{
          alert("אנא אשר את התקנון")
          return false;
      }
    }
    
>>>>>>> Boaz:VolenteerSignUpJS.js
