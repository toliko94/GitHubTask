var stdNo = 0;

//function that innerHTML BY ID

function addItemsToList(fname,lname,email,phone)
{
  var ul = document.getElementById('list');
  var header = document.createElement('h2');

  var _fName = document.createElement('li');
  var _lName = document.createElement('li');
  var _Email = document.createElement('li');
  var _Phone = document.createElement('li');

  header.innerHTML = 'user ' + (++stdNo);

  _fName.innerHTML = 'first name :' + fname;
  _lName.innerHTML = 'first name :' + lname;
  _Email.innerHTML = 'first name :' + email;
  _Phone.innerHTML = 'first name :' + phone;

  ul.appendChild(header);
  ul.appendChild(_fName);
  ul.appendChild(_lName);
  ul.appendChild(_Email);
  ul.appendChild(_Phone);


}



//function that innerHTML where ever you want
function showBuissnesInfo(Company_name  ,Msg , Phone) {
  document.querySelector('#Bdata').innerHTML += 
  `
  <p id="pointsid"><i class="fa fa-check-square fa-fw w3-margin-right w3-large w3-text-teal"></i>${Company_name}</p>
  <div>   <p id="nameid"><i class="fa fa-spinner fa-spin fa-3x fa-fw w3-margin-right w3-large w3-text-teal" style="font-size: xx-large;"></i>${Msg} ${Msg}</p>
  <p id="emailid"><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>${Phone}</p>
  </div>
  `
  }

  //SAME as above
function showUserO(userDetails) {
  document.querySelector('#reqInfo2').innerHTML += 
  `
  <p id="pointsid"><i class="fa fa-check-square fa-fw w3-margin-right w3-large w3-text-teal"></i>${userDetails.userId}</p>
  <div>   <p id="nameid"><i class="fa fa-spinner fa-spin fa-3x fa-fw w3-margin-right w3-large w3-text-teal" style="font-size: xx-large;"></i>${userDetails.firstName} ${userDetails.lastName}</p>
  <p id="emailid"><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>${userDetails.email}</p>
  <p id="pointsid"><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>${userDetails.phone}</p>
  <p id="pointsid"><i class="fa fa-check-square fa-fw w3-margin-right w3-large w3-text-teal"></i>${userDetails.addres}</p>
  </div>
  `
  }
  








//function that get all the data about some kind of root

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





 //function that return data base by value
const UserlistO = firebase.database().ref('OldmanUsers')


function SearchO (){
  const Email = document.getElementById('SearchByEmail').value;
  console.log(Email);
  UserlistO.orderByChild('email').equalTo(Email).on("value", function(snapshot) {
    console.log(snapshot.val());


    
    snapshot.forEach(function(data) {
        if (data.key)
        {

        }
        console.log(data.key);
       // readUserDetailsO(data.key)
      });
  });
}




//Function that read user details by id and return data in package
function readUserDetailsO(userId) {
firebase.database().ref('/OldmanUsers/' + userId).once('value').then((snapshot) => {
var firstName = snapshot.val().firstName
var lastName = snapshot.val().lastName
var email = snapshot.val().email
var phone =snapshot.val().phone
var addres = snapshot.val().addres



var userDetails = {
    userId: userId,
    firstName: firstName,
    lastName: lastName,
    phone : phone,
    email:email,
    addres: addres
    
    
}
console.log("jason good")
console.log(userId)
showUserO(userDetails)

});
}












  //Function that get values and display it when ever you want in div
function addItemsToList(Company_name,Msg,Phone)
{
  var ul = document.getElementById('list');
  var p = document.getElementById('p')
  var header = document.createElement('h2');

  var _Company_name = document.createElement('li');
  var _Msg = document.createElement('li');
  var _Phone = document.createElement('li');

  /*
  header.innerHTML = 'Company Name ' + (Company_name);

  _Msg.innerHTML = 'הודעה :' + Msg;
  _Phone.innerHTML = 'מספר טלפון :' + Phone;
  _Msg.innerHTML = 'הודעה :' + Msg;
*/
  document.querySelector('#Bdata').innerHTML += 
  `
  <div class="w3-container w3-teal">
  
</div>
  
  <div class="w3-content">
  
    <div class="w3-row w3-margin">
  
      <div class="w3-third">
      <img src="Logo.png" style="width:100%;min-height:200px">
      </div>
    <div class="w3-twothird w3-container">
     <h2>${Company_name}</h2>
     <p>
     ${Msg}
     </p>

     <h3>Phone Number : ${Phone}</h3>

   </div>
  
  </div>
  `
  


  ul.appendChild(header);
  ul.appendChild(_Msg);
  ul.appendChild(_Phone);


}

//his HTML is :

/*

this is working 
---------------
<div id="Bdata"></div>
---------------


//this is for the unchecd
<ul id="list">
<h2></h2> 
 <li></li>

</ul>
*/


//---------------------------------------------------------------------------------------------------
// function that run at the beggining of the load and display the image from the gallery
const storageRef = firebase.storage().ref();
function displayProfilepic(userId)
{
  storageRef.child(userId).getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'
  
    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
  
    // Or inserted into an <img> element:
    var img = document.getElementById('image');
    img.src = url;
    console.log("image downloaded URL is :")
    console.log(url)
    console.log("to this id :")
    console.log(userId)
    
  }).catch(function(error) {
    // Handle any errors
  });}




//function that taking by id and adding
function AddPoints() 
{

  const ID=document.getElementById('IDpoints').value;
  const points=document.getElementById('Addpoints').value;
  database.ref('/VolenteerUsers/' + ID).once('value').then((snapshot) =>
  {
    
//create var and get the value form db
  var oldpoints = snapshot.val().points
  var firstName = snapshot.val().firstName
  var lastName = snapshot.val().lastName
  var email = snapshot.val().email
  var phone =snapshot.val().phone
  console.log(ID);
  console.log(points);
  console.log(oldpoints);
  //sum of two 
  var newe = (+points) + (+oldpoints);
  console.log("djhfjds");
  console.log(newe);
  var updatedform = 
  {
    userId: ID,
    firstName: firstName,
    lastName: lastName,
    phone : phone,
    email:email,
    points : newe
 
  }

  console.log(newe)
  //send the new updatedform ubject and the id newpoints()
  newpoints(updatedform,ID)
  alert("נקודות המתנדב עודכנו בהצלחה!")
  
  });
}

//function taht get  NEW object with new Data , ID of the user and update it to 'xxxxx' ref  
function newpoints(updatedform, ID) 
{
    database.ref('VolenteerUsers/' + ID).set(updatedform, (error) => {
        if (error)
         {
            alert("Something went wrong..." + error.errorMessage)
         }
            
            
        
    })
}



// two same function that make deleting

const Userlist = firebase.database().ref('VolenteerUsers');
const Userlist2 = firebase.database().ref('OldmanUsers');

function DeleteVU()
{
  const ID=document.getElementById('DeletedID').value;
  console.log("1המשתמש הוסר בהצלחה");
  var deleteRef= Userlist.child(ID);
  console.log("2המשתמש הוסר בהצלחה");
  return deleteRef.remove()
  .then(function()
  {
    console.log("המשתמש הוסר בהצלחה");

  })
  .catch(function(){
    console.log("Error!");

  });

}

//the same (Userlist2)
function DeleteOU()
{
  const ID=document.getElementById('DeletedID').value;
  console.log("1המשתמש הוסר בהצלחה");
  var deleteRef= Userlist2.child(ID);
  console.log("2המשתמש הוסר בהצלחה");
  return deleteRef.remove()
  .then(function()
  {
    console.log("המשתמש הוסר בהצלחה");

  })
  .catch(function(){
    console.log("Error!");



  });

}



function displayNumofCompletedReq() {
  firebase.database().ref('/CounterReq').once('value').then((snapshot) => {
      var _CounterReq = snapshot.val()
      console.log("this is value")      
      console.log(_CounterReq)      
       

     
      console.log("jason good")
      
     // showU()
     document.querySelector('#numReq').innerHTML += `
  
  
     <p style="margin-left: 43%;" id="phoneid"><i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw w3-margin-right w3-large w3-text-teal"></i>${_CounterReq} :כמות התנדבויות שבוצעו  </p>
     
     
      </div>
    `

  });
}