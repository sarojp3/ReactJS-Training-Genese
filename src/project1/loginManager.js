import firebase from 'firebase';

export async function loginWithSocialMedia(accountType){

        if(accountType=="google"){
            const provider = new firebase.auth.GoogleAuthProvider();
            return await firebase.auth().signInWithPopup(provider);
        }
}

export async function signup(email,password){
    return await firebase.auth().createUserWithEmailAndPassword(email,password);
}

export async function signin(email,password){
    return await firebase.auth().signInWithEmailAndPassword(email,password);
}