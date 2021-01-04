console.log(firebase)




const Phone = document.getElementById('Phone');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const Email = document.getElementById('Email');
const Msg = document.getElementById('Msg');

const addBtn = document.getElementById('addBtn');







const database = firebase.database();
const usersRef = database.ref('/ContactUs');


addBtn.addEventListener('click', e => {
  e.preventDefault();
  usersRef.child(Phone.value).set({
    first_name: firstName.value,
    last_name: lastName.value,
    Email: Email.value,
    Phone:Phone.value,
    Msg:Msg.value

    
  });
  console.log("Data Written")
  alert("תודה שפנית אלינו :)")
  location.replace("ContactUs.html")
});

