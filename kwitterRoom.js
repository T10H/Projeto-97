
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyDOGZV4zmEUf6RcD5az9AIA7BSYZTR8OkY",
  authDomain: "metagram-c5f0e.firebaseapp.com",
  databaseURL: "https://metagram-c5f0e-default-rtdb.firebaseio.com",
  projectId: "metagram-c5f0e",
  storageBucket: "metagram-c5f0e.appspot.com",
  messagingSenderId: "287301707315",
  appId: "1:287301707315:web:27f2349ceb611cb052a546"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomname = document.getElementById("roomname").value;

  firebase.database().ref("/").child(roomname).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomname", roomname);
    
    window.location = "metagrampage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomname' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomname", name);
    window.location = "metagrampage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomname");
    window.location = "index.html";
}
