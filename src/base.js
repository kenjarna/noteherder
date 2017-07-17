import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyC5gaYN-SEsqHrhCPwkYo5LtX6fjiFdRj8",
    authDomain: "fooddelivery-5d1f3.firebaseapp.com",
    databaseURL: "https://fooddelivery-5d1f3.firebaseio.com",
    projectId: "fooddelivery-5d1f3",
    storageBucket: "",
    messagingSenderId: "594394249400"
  })

const db = database(app)

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const gitHubProvider = new firebase.auth.GithubAuthProvider()
export const auth = app.auth()

export default Rebase.createClass(db)
