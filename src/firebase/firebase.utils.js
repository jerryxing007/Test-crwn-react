import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyACjInZAAgi__rMrAzlJ2-cB5CfcIoGfCM",
    authDomain: "crwn-db-aaacd.firebaseapp.com",
    projectId: "crwn-db-aaacd",
    storageBucket: "crwn-db-aaacd.appspot.com",
    messagingSenderId: "248201083565",
    appId: "1:248201083565:web:178646b09afd245b25a424",
    measurementId: "G-G84SSJ1RZX"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;

}
 
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const providers = new firebase.auth.GoogleAuthProvider();
providers.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(providers)

export default firebase;

