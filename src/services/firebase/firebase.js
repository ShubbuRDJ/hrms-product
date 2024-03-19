import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGldNmAy5IWEFRQOFMUf6EwFwDg1TVLMY",
    authDomain: "login-project-33ec2.firebaseapp.com",
    projectId: "login-project-33ec2",
    storageBucket: "login-project-33ec2.appspot.com",
    messagingSenderId: "609910726058",
    appId: "1:609910726058:web:0483bea8be04f474695fd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const google = new GoogleAuthProvider();