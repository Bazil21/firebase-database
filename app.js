
var firebaseConfig = {
    apiKey: "AIzaSyChgtCAPzOIQU38pavI_E4w-h8EAJwaOPs",
    authDomain: "login-with-bazil-21.firebaseapp.com",
    databaseURL: "https://login-with-bazil-21.firebaseio.com",
    projectId: "login-with-bazil-21",
    storageBucket: "login-with-bazil-21.appspot.com",
    messagingSenderId: "640980968134",
    appId: "1:640980968134:web:1f589075c6aa5c622fedc7",
    measurementId: "G-0WRJE40M30"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var cnic = document.getElementById("cnic");
  var btn = document.getElementById("btn");

  const database_ref = firebase.database().ref();
  const dataref = database_ref.child("info");

  function submit(){
      var getemail = email.value;
      var getpassword = password.value;
      var getcnic = cnic.value;
      database_ref.child('get/').push({
          email:getemail,
          password:getpassword,
          cnic:getcnic
      });
  }

btn.addEventListener('click' , submit);