import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "YOUR API",
    authDomain: "YOUR DOMAIN",
    databaseURL: "YOUR DATABASE",
    projectId: "YOUR PROJECT ID",
    storageBucket: "YOUR STORAGE BUCKET",
    messagingSenderId: "YOUR SENDER ID"
  })

const db = database(app)

export default Rebase.createClass(db)