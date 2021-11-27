const firebaseConfig = {
      apiKey: "AIzaSyDohsk9wmLe1O41OnMkorNsq-JT4AsDLkg",
      authDomain: "kwitterdb-9919e.firebaseapp.com",
      databaseURL: "https://kwitterdb-9919e-default-rtdb.firebaseio.com",
      projectId: "kwitterdb-9919e",
      storageBucket: "kwitterdb-9919e.appspot.com",
      messagingSenderId: "1012761113255",
      appId: "1:1012761113255:web:6a5fff7df82074f0e3a182",
      measurementId: "G-ZP4RH05REJ"
}; // Initialize Firebase 
const app = initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function add_room(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"Hello World"
      });
      localStorage.setItem("Send_To_Firebase",room_name);
      window.location="";
}







function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();