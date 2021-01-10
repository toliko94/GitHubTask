console.log(firebase)


var userId = 012;
//catch the del button
const DelBtn = document.getElementById('buttonD');


function getid(user)
{
userId = user.uid;
console.log("inside getid")
console.log(userId)
}

//function that run at the beggining and check if the user is loged in
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
     console.log("TAKIN !")
     getid(user);
     
     
     console.log("this is in auth" + userId)
    
    } else {
      
      // No user is signed in.
    }
  });


// function that'll run if the user wants to keep his request
function keepReq()
{
    alert("בקשתך נשמרה ובחיפוש של מתנדב נוסף..")
    location.replace("OldmanEnter.html");
}



//function that'll run if the user no longer want to keep his request





DelBtn.addEventListener('click', e => {
  e.preventDefault();
  
  console.log("Data Deleted")
  
  console.log(userId)
  

  const Ref = database.ref('/VolenterRequests');

       Ref.child(userId).set({
            place :  "נמחק ",
            placekey : "נמחק ",
            time :  "נמחק ",
            timekey : "נמחק ",
            type :  " נמחק",
            typekey : "נמחק "
        })
  console.log("DATA Updated !")
  alert("אנא המתן.. מעדכן בקשה")
  

    setTimeout(function(){ 
        alert("בקשתך נמחקה !")
      console.log("Ready")
      location.replace("oldmanEnter.html")
  }, 2000);




});




var numReq;
function displayNumofCompletedReq() {
  firebase.database().ref('/CounterReq').once('value').then((snapshot) => {
      var _CounterReq = snapshot.val()
      numReq = _CounterReq;
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