const firebaseConfig = {
    apiKey: "AIzaSyAGrSu4fExK8_8kkogcs6pvr3gg9T5QJek",
    authDomain: "uptodd-registration-form.firebaseapp.com",
    databaseURL: "https://uptodd-registration-form-default-rtdb.firebaseio.com",
    projectId: "uptodd-registration-form",
    storageBucket: "uptodd-registration-form.appspot.com",
    messagingSenderId: "130698322579",
    appId: "1:130698322579:web:33537b3130a0f9fe26e366",
    measurementId: "G-N793Y0PLRW"
  };

  firebaseConfig. initializeApp(firebaseConfig);

  var UptoddRegistrationform =  firebase.database().ref('uptodd-registration-form')

  document.getElementById('uptodd-registration-form').addEventListener("submit", submitForm);


  function submitForm(e){
    e.preventdefault();
    var name = getElementByVal('name');
    var email = getElementByVal('email');
    var mobile = getElementByVal('mobile');
    var babyage = getElementByVal('baby-age');

    console.log(name, email, mobile, babyage);
    

  }

  const getElementByVal = (id) =>{
    return document.getElementById(id).value;  
}