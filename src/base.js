import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCLONm-T3SH_BP4cJmLGz9wU5vsxFgPgDs",
    authDomain: "noteherder-f7bd7.firebaseapp.com",
    databaseURL: "https://noteherder-f7bd7.firebaseio.com",
    projectId: "noteherder-f7bd7",
    storageBucket: "noteherder-f7bd7.appspot.com",
    messagingSenderId: "577347323744"
  })

const db = database(app)

export const googleProvider = new firebase.auth.GoogleAuthProvider
export const auth = app.auth()

export default Rebase.createClass(db)
