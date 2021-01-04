console.log(firebase)

const user = firebase.auth.currentUser;
const requestRef = database.ref('/VolRequest');
var mainuser;


//net var for the button from html
let send = document.getElementById('SubmitBtn');


//check that send var is real







        var select1;
        var select2;
        var select3;


    function test()
    {
       
//First Selection :
        if (document.getElementById("grp11").checked)
        {
            select1 = document.getElementById("grp11").value
            console.log("found the value in place : "  + select1)
        }
        
       else if (document.getElementById("grp12").checked)
        {
            select1 = document.getElementById("grp12").value
            console.log("found the value in place : "  + select1)
        }
        else if (document.getElementById("grp13").checked)
        {
            select1 = document.getElementById("grp13").value
            console.log("found the value in place : "  + select1)
        }
         else if (document.getElementById("grp14").checked)
        {
            select1 = document.getElementById("grp14").value
            console.log("found the value in place : "  + select1)
        }
        else if (document.getElementById("grp15").checked)
        {
            select1 = document.getElementById("grp15").value
            console.log("found the value in place : "  + select1)
        }
       else if (document.getElementById("grp16").checked)
        {
            select1 = document.getElementById("grp16").value
            console.log("found the value in place : "  + select1)
        }
       else if (document.getElementById("grp17").checked)
        {
            select1 = document.getElementById("grp17").value
            console.log("found the value in place : "  + select1)
        }
        else if (document.getElementById("grp18").checked)
        {
            select1 = document.getElementById("grp18").value
            console.log("found the value in place : "  + select1)
        }

        else
        {
            alert("לא הוקשה בחירת איזור")
            location.replace("WriteVol.html")
        }

        //end of the first selection

        // secend selection :

        if (document.getElementById("grp21").checked)
        {
            select2 = document.getElementById("grp21").value
            console.log("found the value in time : "  + select2)
        }
        
       else if (document.getElementById("grp22").checked)
        {
            select2 = document.getElementById("grp22").value
            console.log("found the value in time : "  + select2)
        }
        else if (document.getElementById("grp23").checked)
        {
            select2 = document.getElementById("grp23").value
            console.log("found the value in time : "  + select2)
        }
        else
        {
            alert("לא הוקשה בחירת שעה ")
            location.replace("WriteVol.html")        }

        //end of selection 2

        //third selection 3 :

        if (document.getElementById("grp31").checked)
        {
            select3 = document.getElementById("grp31").value
            console.log("found the value in type : "  + select3)
        }
        
       else if (document.getElementById("grp32").checked)
        {
            select3 = document.getElementById("grp32").value
            console.log("found the value in type : "  + select3)
        }
        else if (document.getElementById("grp33").checked)
        {
            select3 = document.getElementById("grp33").value
            console.log("found the value in type : "  + select3)
        }
         else if (document.getElementById("grp34").checked)
        {
            select3 = document.getElementById("grp34").value
            console.log("found the value in type : "  + select3)
        }
        else if (document.getElementById("grp35").checked)
        {
            select3 = document.getElementById("grp35").value
            console.log("found the value in type : "  + select3)
        }
       else if (document.getElementById("grp36").checked)
        {
            select3 = document.getElementById("grp36").value
            console.log("found the value in type : "  + select3)
        }
      

        else
        {
            alert("לא הוקשה בחירת סוג ההתנדבות")
            location.replace("WriteVol.html")        }


        

       const Ref = database.ref('/VolenterRequests');

       Ref.child(mainuser.uid).set({
            place : select1,
            secend : select2,
            third : select3
        })

        console.log("The Data is wriiten to the database")
        location.replace("OldmanEnter.html")
        
     

        
    }

    

  

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

    mainuser = user;
    
  } else {
    // No user is signed in.
  }
});


