// Replace with your own Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCgu4CYsYkUoVDH3w5AHGOuiEQN2yhmHSo",
  authDomain: "celltherapy-69b1d.firebaseapp.com",
  databaseURL: "https://celltherapy-69b1d-default-rtdb.firebaseio.com",
  projectId: "celltherapy-69b1d",
  storageBucket: "celltherapy-69b1d.firebasestorage.app",
  messagingSenderId: "714260651727",
  appId: "1:714260651727:web:1e1e8b6416f31a1a7121ba",
  measurementId: "G-QF5QM6YLJP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
