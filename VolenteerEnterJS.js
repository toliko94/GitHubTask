console.log(auth);


const Msg = document.getElementById('textarea');
const DelBtn = document.getElementById('buttonD');
const updateBtnp = document.getElementById('updateBtnp');
const updateBtna = document.getElementById('updateBtna');


//const update_phone = document.getElementById('update_phone').value;
//const update_addres = document.getElementById('update_addres').value;

function getuser(user){
  j=user.uid
}
firebase.auth().onAuthStateChanged(function(user) {
  
  
  
  if (user) {
    // User is signed in.
    alert("המשתמש המחובר: " + user.uid );
    getuser(user);
  

   readUserDetails(user.uid);
   readUserReq(user.uid);



    
  } else {
    // No user is signed in.
    alert("משתמש לא מחובר !")
    
  }
});



/*
//UPDATE PHONE
updateBtnp.addEventListener('click', e => {
  e.preventDefault();
  userss.child(j).update({
    phone:update_phone
  });
  alert("phoneee !")

});

//UPDATE ADDRES
updateBtna.addEventListener('click', e => {
  e.preventDefault();
  userss.child(j).update({
    addres:update_addres

  });
  alert("adresss !")
});

*/








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


//Function that display the user info in live
function readUserDetails(userId) {
  firebase.database().ref('/VolenteerUsers/' + userId).once('value').then((snapshot) => {
      var firstName = snapshot.val().firstName
      var lastName = snapshot.val().lastName
      var email = snapshot.val().email
      var phone =snapshot.val().phone
      var points = snapshot.val().points
      
      

      var userDetails = {
          userId: userId,
          firstName: firstName,
          lastName: lastName,
          phone : phone,
          email:email,
          points: points
          
          
      }
      console.log("jason good")
      console.log(userId)
      showUser(userDetails)

  });
}


function showUser(userDetails) {
  document.querySelector('#root').innerHTML += 
  `
   <div>   <p id="nameid"><i class="fa fa-spinner fa-spin fa-3x fa-fw w3-margin-right w3-large w3-text-teal" style="font-size: xx-large;"></i>${userDetails.firstName} ${userDetails.lastName}</p>
   <p id="emailid"><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>${userDetails.email}</p>
   <p id="pointsid"><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>${userDetails.phone}</p>
   <p id="pointsid"><i class="fa fa-check-square fa-fw w3-margin-right w3-large w3-text-teal"></i>${userDetails.points}</p>
    </div>
  `
}

/*

    // FUNCTION THAT READ AND DISPLAY THE INFORMATION OF THE REQUEST
function readUserReq(userId) {
  firebase.database().ref('/Volenteering/' + userId).once('value').then((snapshot) => {
      var place = snapshot.val().place
      var time = snapshot.val().time
      var type = snapshot.val().type
    
      

      var userDetails = {
        userId: userId,
        place: place,
        time: time,
        type : type
        
         
          
      }
      console.log("jason info good")
      console.log(userId)
      showUserInfo(userDetails)

  });
}


function showUserInfo(userDetails) {
  document.querySelector('#reqInfo').innerHTML += `
  
  
   <p id="phoneid"><i class="fa fa-spinner fa-spin fa-3x fa-fw w3-margin-right w3-large w3-text-teal"></i>${userDetails.place}</p>
   
   <p id="emailid"><i class="fa fa-spinner fa-spin fa-3x fa-fw w3-margin-right w3-large w3-text-teal"></i>${userDetails.time}</p>
   <p id="addresid"><i class="fa fa-spinner fa-spin fa-3x fa-fw w3-margin-right w3-large w3-text-teal"></i>${userDetails.type}</p>

    </div>
  `
}


const usersRef = database.ref('/DeletedRequests/DeletedVolenteer');


DelBtn.addEventListener('click', e => {
  e.preventDefault();
  usersRef.child(j).set({
    
    Msg:Msg.value

    
  });
  console.log("Data Deleted")
  console.log(Msg.value)
  console.log(j)
  alert("בקשתך נמחקה)")

  const Ref = database.ref('/Volenteering');

       Ref.child(j).set({
            place :  "נמחק ",
            placekey : "נמחק ",
            time :  "נמחק ",
            timekey : "נמחק ",
            type :  " נמחק",
            typekey : "נמחק "
        })
  console.log("DATA Updated !")
  location.replace("VolenteerEnter.html")
});
*/