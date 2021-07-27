import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore'

const config = {
    apiKey: "AIzaSyAu4u5S3EDKPpAwfIC39EVre9KomHyee9o",
    authDomain: "fir-draly-task.firebaseapp.com",
    databaseURL: "https://fir-draly-task-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-draly-task",
    storageBucket: "fir-draly-task.appspot.com",
    messagingSenderId: "563845295922",
    appId: "1:563845295922:web:a584a6a70b5b9af334b12b"
}

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        return this.auth.signOut();
    }

    async register(name, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password)
        return this.auth.currentUser.updateProfile({
            displayName: name
        })
    }
}

export default new Firebase();
