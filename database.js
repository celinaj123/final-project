const firebaseConfig = {
    apiKey: "AIzaSyCw9kWovdn9I1ziaLvA4CHCFdXttCODEoQ",
    authDomain: "final-project-lnt-c1fb8.firebaseapp.com",
    databaseURL: "https://final-project-lnt-c1fb8-default-rtdb.firebaseio.com",
    projectId: "final-project-lnt-c1fb8",
    storageBucket: "final-project-lnt-c1fb8.appspot.com",
    messagingSenderId: "639363805683",
    appId: "1:639363805683:web:e004f2e121be8088b7e286",
    measurementId: "G-R344CH51PP"
  };

firebase.initializeApp(firebaseConfig);
let database = firebase.database().ref('register');


const form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const nama = document.querySelector("#nama").value;
    const phone = document.querySelector("#email").value;
    const eventt = document.querySelector("#eventt").value;

  let newData = database.push();
  newData.set({
      emailData: email,
      namaData: nama,
      phoneData : phone,
      eventData: eventt,
  });
});