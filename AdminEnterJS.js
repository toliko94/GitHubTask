  console.log(auth);
  console.log("test");
  j=0

  



  const Userlist = firebase.database().ref('VolenteerUsers');





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
      location.replace("VolenteerSignUp.html")
      
    }


    function change(){
      location.replace("ChooseVol.html");
    }
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        j=user.uid;


      } else {
        console.log('user logged out');
      }
    })
   
    function Search (){
        const Email = document.getElementById('SearchByEmail').value;
        console.log(Email);
        Userlist.orderByChild('email').equalTo(Email).on("value", function(snapshot) {
            console.log(snapshot.val());
            snapshot.forEach(function(data) {
                if (data.key)
                console.log(data.key);
                alert("שם המשתמש הוא: "+ data.key);
             
            });
        });

        

     





    }

    