
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBiy3gRl1BekM1OjVIPDfdiaOYssZR6wxc",
    authDomain: "form-6a08f.firebaseapp.com",
    projectId: "form-6a08f",
    storageBucket: "form-6a08f.appspot.com",
    messagingSenderId: "445926248629",
    appId: "1:445926248629:web:e5abd287bc08f99186aefc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));


    promise.then(user =>{
        console.log("Signed In as"+email.value);
        
    })

    
}
    


function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    //takes user to a different home page 
}
function signOut() {
    auth.signOut();
    alert("Signed Out");
    
}
auth.onAuthStateChanged(function (user) {
    if(user){
        var email = user.email;
        alert("Active User"+ email);
        //is signed in
    }else{
        alert("No Active User");
        //no user is signed in
    }
    
});
