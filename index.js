console.log(firebase)

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
     console.log("משתתמש מחובר !")
     getid(user);
     
     
     console.log("this is in auth" + userId)
    
    } else {
      
      console.log("משתמש לא מחובר");
    }
  });





function AdminIn()
{

  var Admin = document.getElementById('Admin');
  console.log(Admin.value);
  if (Admin.value=='Wepo4U2222')
  {
    console.log("yes");

    
    var AdminEmail = 'Wepo4U@gmail.com';
    var AdminPassword = '123456'
    console.log(AdminEmail);
    firebase.auth().signInWithEmailAndPassword(AdminEmail, AdminPassword)
    .then((user) => {
        console.log("hph!!")
        console.log(user);
        location.replace("AdminEnter.html")
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    });





    


  }
  else {
      alert("נראה לנו שהתבלבלתם");
  }

}


