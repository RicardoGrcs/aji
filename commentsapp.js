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

  const panel = document.querySelector("#panel");

    var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"];

    var db = firebase.firestore();

    db.collection("comments").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {

            var d = new Date(doc.data().fecha);
            var fecha = d.getDate()+" "+months[d.getMonth()]+" "+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes();
            panel.innerHTML += 
            /*html*/`<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="card m-3">
                <div class="card-header text-white">
                    <i class="fas fa-user"></i> ${doc.data().name}
                </div>
                <div class="card-header text-white">
                    <i class="fas fa-envelope-square"></i> ${doc.data().email}
                </div>
                <div class="card-body">${doc.data().mensaje}</div>
                <div class="card-footer text-white"><i class="fas fa-clock"></i> ${fecha}</div>
                </div>
            </div>`
            
        });
    });
