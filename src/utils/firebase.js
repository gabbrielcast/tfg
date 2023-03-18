// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBSoIAn5E7aUHy5c64LV5TZehOcJuBoBRA',
    authDomain: 'byhome-6dc28.firebaseapp.com',
    projectId: 'byhome-6dc28',
    storageBucket: 'byhome-6dc28.appspot.com',
    messagingSenderId: '719121085573',
    appId: '1:719121085573:web:7af078900886547347e5ec'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Utilsd
// const AUTH=getAuth(app);
const DB = getFirestore(app)

export { DB }
