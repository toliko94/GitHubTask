/*
function AdminIn()
{
  var Admin = document.getElementById('Admin');
  console.log(Admin.value);
  if (Admin.value=='Wepo4U2222'){
    console.log("yes");

    
    var AdminEmail = 'Wepo4U@gmail.com';
    var AdminPassword = '123456'
    console.log(AdminEmail);
    

     const promise = auth.signInWithEmailAndPassword(AdminEmail, AdminPassword);
     promise.catch(e => alert(e.message));

      alert("התחברת !" + email.value );
      

    
  }
  else {
    console.log("no");
  }

}


*/

  //SingUp - Function

    function signUp()
    {
       
      
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      if (validate() == true)
      {
        alert("תודה שהצטרפת :)");

        registerNewUser(email,password);
      
      }
      else
      {
       
        
      }
  }
  

    function registerNewUser(email,password)
    {
        auth.createUserWithEmailAndPassword(email, password).then((loggedUser) => {
            // Signed in with email and password, now insert details to DB
            points=0
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
                points: points,
                phone: phone
                
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
                    alert("ההרשמה הסתיימה בהצלחה!")
                    location.replace("VolenteerEnter.html")
                    
                }
            })
        }
  
    //SingIn - Function
    function signIn()
    {
      var email = document.getElementById("email");
      var password = document.getElementById("password");

      var kanes = firebase.auth().signInWithEmailAndPassword(email.value, password.value)
      .then((user) => {
        
        alert("nice !")
        alert("התחברת !" + email.value );
        location.replace("VolenteerEnter.html")
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
       
      if (error) {
        alert("Something went wrong..." + error.errorMessage)
    } else {
        alert(" !!!!!!!ההרשמה הסתיימה!")
        location.replace("VolenteerEnter.html")
        
    }

       // alert("התחברת !" + email.value );
       // location.replace("OldmanEnter.html")
        
    }


    function signOut()
    {
      auth.signOut();
      alert("התנתקת !")
      location.replace("XXXXX")
    }
  /*
      
      */
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var AdminEmail = 'wepo4U@gmail.com';
        alert(user.email);
        
        alert("224משתמש מחובר :" +user.email )
        

    
        
      } else {
        // No user is signed in.
        alert("223משתמש לא מחובר !")
        
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
    
