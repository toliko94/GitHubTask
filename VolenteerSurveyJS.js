j=0



window.onload = function(){

    
}



const tips = document.getElementsByName('user_message2');




sub=document.getElementsByClassName("subbutton");
if (sub){
    console.log("yes sub");

}
else{
    console.log("no sub");
}
const usersRef = database.ref('/Reviews');

auth.onAuthStateChanged(user =>{
    if (user){
    j=user.uid
    console.log(user)
    }
    else
    alert("user not online")
})




function submitt(){
    const Msg = document.getElementById('Msg');
    const tips = document.getElementById('tips');


    if (document.getElementById('check1').checked){
        document.getElementById('check1').checked
  
    }
    else{
        console.log("test no")
        document.getElementById('check1').value="לא נבחר";
    }

    if (document.getElementById('check2').checked){
        document.getElementById('check2').checked
  
    }
    else{
        console.log("test no")
        document.getElementById('check2').value="לא נבחר";
    }

    if (document.getElementById('check3').checked){
        document.getElementById('check3').checked
  
    }
    else{
        console.log("test no")
        document.getElementById('check3').value="לא נבחר";
    }

    if (document.getElementById('check4').checked){
        document.getElementById('check4').checked
  
    }
    else{
        console.log("test no")
        document.getElementById('check4').value="לא נבחר";
    }
    var newsub={

        friendly: document.querySelector('input[name="gender1"]:checked').value,
        timing: document.querySelector('input[name="gender2"]:checked').value,
        proffesional: document.querySelector('input[name="gender3"]:checked').value,
        check1: check1.value,
        check2: check2.value,
        check3: check3.value,
        check4: check4.value,
        Msg: Msg.value,
        tips:tips.value

      
    }
    console.log("writensurvey1")
    writeUserData(newsub, j)
    console.log("writensurvey2")
    alert("תודה רבה על השתתפותך בסקר");









    function writeUserData(user, userId) {
        database.ref('Reviews/' + userId).set(user, (error) => {
            if (error) {
                alert("Something went wrong..." + error.errorMessage)
            } else {
                alert("  שליחת הסקר הושלמה בהצלחה!")
                location.replace("VolenteerEnter.html")
                
            }
        })
    }
    
        
   

    

}

