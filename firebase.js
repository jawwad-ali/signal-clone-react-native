import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA6SMm_U5SWBSgMzCWDC37fK6Prrrv8SuU",
    authDomain: "signal-clone-react-nativ-7f676.firebaseapp.com",
    projectId: "signal-clone-react-nativ-7f676",
    storageBucket: "signal-clone-react-nativ-7f676.appspot.com",
    messagingSenderId: "102740552769",
    appId: "1:102740552769:web:7e16187307a90fdb192ac0",
    measurementId: "G-CYEYQBBMFB"
};

let app;
// firebase.apps.length === 0 ? app = firebase.initializeApp(firebaseConfig) : app = firebase.app()

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
}
else {
    app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()
export { db, auth }


// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const db = firebaseApp.firestore()
// const auth = firebase.auth()
// export { db, auth }