const firebaseConfig = {
    apiKey: "AIzaSyBSCzST0h5BDW5-cUqTv0IlZaYBesdab0A",
    authDomain: "asoc-juve-innovados.firebaseapp.com",
    databaseURL: "https://asoc-juve-innovados.firebaseio.com",
    projectId: "asoc-juve-innovados",
    storageBucket: "asoc-juve-innovados.appspot.com",
    messagingSenderId: "726907839478",
    appId: "1:726907839478:web:d80406f73ec961f1825dd7"
  };

  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  const formulario = document.querySelector("#formulario");

  formulario.addEventListener("submit", sendComment);

  function sendComment(e){
    e.preventDefault();
    db.collection("comments").add({
        
        name: document.querySelector("#uname").value,
        email: document.querySelector("#email").value,
        fecha: Date.now(),
        mensaje: document.querySelector("#comment").value,
    })
    .then(function(docRef) {
        console.log("inserted");
        document.querySelector("#alert").style.visibility = "visible";
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }