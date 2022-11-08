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
userName = localStorage.getItem("userName")
roomname = localStorage.getItem("roomname")
function send() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(roomname).push({
    name: userName,
    message: msg,
    like: 0
  })
  document.getElementById("msg").value = ""
}
function getData() {
  firebase.database().ref("/" + roomname).on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; childData = childSnapshot.val();
      if (childKey != "purpose") {
        firebaseMessageId = childKey;
        messageData = childData;
        //Início do código
console.log(firebaseMessageId)
console.log(messageData)
name = messageData["name"]
message = messageData["message"] 
like = messageData["like"]
namewithtag = "<h4>" + name +"</h4>"
messagewithtag = "<h4 class = 'message_h4'>" + message +"</h4>"
likebutton = "<h4 class = 'btn btn-warning' id = " + firebaseMessageId + "value = "+ like +"onclick = 'updatelike(this.id)'>"
spanwithtag = "<span class ='glyphicon glyphicon-thumbs-up ' like:>" + like +"</span> </button>"
row = namewithtag + messagewithtag + likebutton + spanwithtag
document.getElementById("output").innerHTML += row
        //Fim do código
      }
    });
  });
}
getData();
function updatelike(message_id){
  console.log(message_id)
  button_id = message_id
  likes = document.getElementById(button_id).value
  updatelike = Number(likes) + 1
  console.log(updatelike)
  firebase.database().ref(roomname).child(message_id).update({
    like: updatelike
    
  })
console.log(button_id)
console.log(like)
}

function logout(){
localStorage.removeItem("userName")
localStorage.removeItem("roomname")
window.location.replace("index.html")
}
