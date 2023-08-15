import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyDH1JWYClqwsgVJnAScx_dfsTjN647bra4",
    authDomain: "fire-base-75d77.firebaseapp.com",
    projectId: "fire-base-75d77",
    storageBucket: "fire-base-75d77.appspot.com",
    messagingSenderId: "665574281053",
    appId: "1:665574281053:web:03ea7e0c38f3c0242f22b4",
    measurementId: "G-59TS04KL0P"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, fbProvider, githubProvider, createUserWithEmailAndPassword };