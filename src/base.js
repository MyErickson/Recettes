import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBs_PVScnFW1501lhscWZ7iZtwzt1mtVWg",
  authDomain: "recette-react.firebaseapp.com",
  databaseURL: "https://recette-react.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
