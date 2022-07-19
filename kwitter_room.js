
//ADD YOUR FIREBASE LINKS HERE



const firebaseConfig = {
  apiKey: "AIzaSyD0m7h-9bMnYQwSeljAShj8JlRVatn3NB4",
  authDomain: "kwitter-project-8fa07.firebaseapp.com",
  databaseURL: "https://kwitter-project-8fa07-default-rtdb.firebaseio.com/",
  projectId: "kwitter-project-8fa07",
  storageBucket: "kwitter-project-8fa07.appspot.com",
  messagingSenderId: "358171368370",
  appId: "1:358171368370:web:2a1da316e1f29b4b3522ab"

}
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Names - " + Room_names )
      
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>  #"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}

      user_name = localStorage.getItem("user_name");
      document.getElementById("userName").innerHTML = "Welcome  " + user_name + "!";

      function addRoom()
      {
      room_mame = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_mame).update({
      purpose: "Adding The Room"  
      })  
      localStorage.setItem("room_name", room_mame);
      window.location = "kwitter_page.html";
      }

      getData();

      function redirectToRoomName(name)
      {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = kwitter_page.html;
      }



function logOut()
{
localStorage.removeItem("room_name");
localStorage.removeItem("user_name");
window.location = "index.html";  
}

