console.log(firebase)
console.log(database)
console.log(auth)
//

const Msg = document.getElementById('textarea');
const DelBtn = document.getElementById('buttonD');


j = 0;



const usersRef = database.ref('/DeletedRequests');


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
  //location.replace("ContactUs.html")
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

var stdNo = 0;

function addItemsToList(fname,lname,email,phone)
{
  var ul = document.getElementById('list');
  var header = document.createElement('h2');

  var _fName = document.createElement('li');
  var _lName = document.createElement('li');
  var _Email = document.createElement('li');
  var _Phone = document.createElement('li');

  header.innerHTML = 'user ' + (++stdNo);

  _fName.innerHTML = 'first name :' + fname + ' - ';
  _lName.innerHTML = 'Last name :' + lname + ' - ';
  _Email.innerHTML = 'Email  :' + email + ' - ';
  _Phone.innerHTML = 'Phone  :' + phone + ' - ';

  ul.appendChild(header);
  ul.appendChild(_fName);
  ul.appendChild(_lName);
  ul.appendChild(_Email);
  ul.appendChild(_Phone);



  

}

function FetchAllData()
{
  firebase.database().ref('OldmanUsers').once('value' , function(snapshot){
    snapshot.forEach(
      function(childSnapshot){
        let fName = childSnapshot.val().firstName;
        let lName = childSnapshot.val().lastName;
        let email = childSnapshot.val().email;
        let phone = childSnapshot.val().phone;

        addItemsToList(fName , lName ,email , phone);

      }
    );
  });
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
    
  } else {
    
    // No user is signed in.
  }
});
 






