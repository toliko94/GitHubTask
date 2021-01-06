console.log(firebase)
console.log(database)
console.log(auth)
//

const Msg = document.getElementById('textarea');
const DelBtn = document.getElementById('buttonD');
const updateBtnp = document.getElementById('updateBtnp');
const updateBtna = document.getElementById('updateBtna');
const userss = database.ref('/OldmanUsers');

const update_phone = document.getElementById('update_phone').value;
const update_addres = document.getElementById('update_addres').value;

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


j = 0;



const usersRef = database.ref('/DeletedRequests/DeletedOldMan');


DelBtn.addEventListener('click', e => {
  e.preventDefault();
  usersRef.child(j).set({
    
    Msg:Msg.value

    
  });
  console.log("Data Deleted")
  console.log(Msg.value)
  console.log(j)
  alert("בקשתך נמחקה)")

  const Ref = database.ref('/VolenterRequests');

       Ref.child(j).set({
            place :  "נמחק ",
            placekey : "נמחק ",
            time :  "נמחק ",
            timekey : "נמחק ",
            type :  " נמחק",
            typekey : "נמחק "
        })
  console.log("DATA Updated !")
  location.replace("OldmanEnter.html")
});




function UploadImage()
{

  console.log(j)
  const ref = firebase.storage().ref()

  const file = document.querySelector("#pimage").files[0]

  const name = j

  const metadata = {
    contentType:file.type,
    customMetadata: {
      'location': 'Yosemite, CA, USA',
      'activity': 'Hiking',
      'date' : Date()
      
    }
    
  }

  const task = ref.child(name).put(file,metadata)

  task
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then(url => 
    {
      console.log(url)
      alert("image uploaded")
      const image = document.querySelector('#image')
      image.src = url
    })
}











   function signOut()
    {
      auth.signOut();
      alert("התנתקת !")
      location.replace("OldmanSignUp.html")
    }

    


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
   console.log("TAKIN !")
   
   j = user.uid;
   readUserDetails(j)
   readUserReq(j);
    
  } else {
    
    // No user is signed in.
  }
});
 

//Function that display the user info in live
function readUserDetails(userId) {
  firebase.database().ref('/OldmanUsers/' + userId).once('value').then((snapshot) => {
      var firstName = snapshot.val().firstName
      var lastName = snapshot.val().lastName
      var email = snapshot.val().email
      var phone = snapshot.val().phone
      var addres = snapshot.val().addres
      

      var userDetails = {
          userId: userId,
          firstName: firstName,
          lastName: lastName,
          phone : phone,
          email:email,
          addres:addres
          
      }
      console.log("jason good")
      console.log(userId)
      showUser(userDetails)

  });
}


function showUser(userDetails) {
  document.querySelector('#root').innerHTML += `
  <div>   <p id="nameid"><i class="fa fa-spinner fa-spin fa-3x fa-fw w3-margin-right w3-large w3-text-teal" style="font-size: xx-large;"></i>${userDetails.firstName} ${userDetails.lastName}</p>
  
   <p id="phoneid"><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>${userDetails.phone}</p>
   
   <p id="emailid"><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>${userDetails.email}</p>
   <p id="addresid"><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>${userDetails.addres}</p>

    </div>
  `
}


// FUNCTION THAT READ AND DISPLAY THE INFORMATION OF THE REQUEST
function readUserReq(userId) {
  firebase.database().ref('/VolenterRequests/' + userId).once('value').then((snapshot) => {
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



