import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_OlBFdSRbmaI_Ef_nBAAupLHa9v6JFnE",
  authDomain: "yt-login-c9729.firebaseapp.com",
  projectId: "yt-login-c9729",
  storageBucket: "yt-login-c9729.appspot.com",
  messagingSenderId: "304844271629",
  appId: "1:304844271629:web:5ddb5c7ec42e50f209a544",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
