const firebaseConfig = {
      apiKey: "AIzaSyDB4q7ql6E7PMSZYD4-hpkacw0XjGm6KmQ",
      authDomain: "porque-sim.firebaseapp.com",
      databaseURL: "https://porque-sim-default-rtdb.firebaseio.com",
      projectId: "porque-sim",
      storageBucket: "porque-sim.appspot.com",
      messagingSenderId: "185318477235",
      appId: "1:185318477235:web:16ba88c61a4d4890a30fc6"
    };

    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código

//Fim do código
      } });  }); }
getData();

function send()
{
 msg = document.getElementById("msg").value;
 firebase.database().ref(roomName).push({
  name:userName,
  message:msg,
  like:0
 });
 
 document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      window.location = "kwitter.html";
      }

      console.log("estou funcionando")
