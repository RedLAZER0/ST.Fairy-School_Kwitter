//YOUR FIREBASE LINKS

var firebaseConfig = {
      apiKey: "AIzaSyCXhbSilX2XjAQ9_f1Tc2vnPttOV6d4wDs",
      authDomain: "kwitter-bac5f.firebaseapp.com",
      databaseURL: "https://kwitter-bac5f-default-rtdb.firebaseio.com",
      projectId: "kwitter-bac5f",
      storageBucket: "kwitter-bac5f.appspot.com",
      messagingSenderId: "882500010005",
      appId: "1:882500010005:web:f98e51acaf2597fd6d8e1c"
    };


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();

user_name = localStorage.getItem("room_name");
room_name = localStorage.getItem("user_name");

function send()
{
msg = document.getElementById("msg").value;


firebase.database().ref(room_name).push({

Name: user_name,
Message: msg,      
likes: 0      
});
document.getElementById("msg").value = "";
}










function logOut()
{
localStorage.removeItem("room_name");
localStorage.removeItem("user_name");
window.location = "index.html";  
}