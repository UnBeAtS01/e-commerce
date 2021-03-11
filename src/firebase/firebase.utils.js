import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBZSP0h9QiQ30D0R_VS5wyBhPzTWSJGCCE",
    authDomain: "e-comweb-ea40b.firebaseapp.com",
    projectId: "e-comweb-ea40b",
    storageBucket: "e-comweb-ea40b.appspot.com",
    messagingSenderId: "716405118235",
    appId: "1:716405118235:web:34d7e6dea1bb6f8991afbe",
    measurementId: "G-L78YPTGYEC"
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);//just console everything if u have a doubt

    const snapShot = await userRef.get();
    console.log(snapShot);
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }

    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
