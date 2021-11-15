const firebaseConfig = {
    apiKey: "AIzaSyAvLWd7BpWVKC8UdyZzNaNnkZPKutiYPCY",
    authDomain: "kwitter-3c9ad.firebaseapp.com",
    databaseURL: "https://kwitter-3c9ad-default-rtdb.firebaseio.com",
    projectId: "kwitter-3c9ad",
    storageBucket: "kwitter-3c9ad.appspot.com",
    messagingSenderId: "685602894791",
    appId: "1:685602894791:web:44cec45cd773d4b056dfe2"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function adduser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}