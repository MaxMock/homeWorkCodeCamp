
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBFRAsK7QmkXYuxvX-OfbhyI9xWAY1VgZA",
    authDomain: "react-9c5a5.firebaseapp.com",
    databaseURL: "https://react-9c5a5.firebaseio.com",
    projectId: "react-9c5a5",
    storageBucket: "react-9c5a5.appspot.com",
    messagingSenderId: "506626704749"
  };

  class Firebase {

    constructor() {
      this.firebase = firebase.initializeApp(config)
    }
  
    getDatabase() {
      return this.firebase.database();
    }
  
  }
  
  export default new Firebase().getDatabase();