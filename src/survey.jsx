import React, { Component } from "react";
var firebase = require("firebase");
var uuid = require("uuid");
var firebaseConfig = {
  apiKey: "AIzaSyD1ObnxHuNDYIsziZ-8C9OHwXhwMfay7UA",
  authDomain: "react-firebase-a57e9.firebaseapp.com",
  databaseURL: "https://react-firebase-a57e9.firebaseio.com",
  projectId: "react-firebase-a57e9",
  storageBucket: "react-firebase-a57e9.appspot.com",
  messagingSenderId: "35165317480",
  appId: "1:35165317480:web:c6441e01235074e5768edd"
};

firebase.initializeApp(firebaseConfig);
export default class Survey extends Component {




    
  render() {
    return (
      <div>
        <p>I am react component</p>
      </div>
    );
  }
}
