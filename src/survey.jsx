import React, { Component } from "react";
import firebase from 'firebase/app';
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
  constructor(props) {
    super(props);

    this.state = {
      uid: uuid.v1(),
      studentName: "",
      answers: {
        answer1: "",
        answer2: "",
        answer3: ""
      },
      isSubmitted: false
    };
  }
  mySubmit(event) {
    var studentName = this.refs.name.value;
    this.setState({
      studentName: studentName
    },function(){ console.log(this.state);});
   

}

  render() {
    var studentName;
    var questions;

    if (this.state.studentName === "" && this.state.isSubmitted === false) {
      studentName = (
        <div>
          <h1>Hey Student,Please Enter Your Name</h1>
          <form onSubmit={this.mySubmit}>
            <input
              className="namy"
              type="text"
              placeholder="Enter Your Name"
              ref="name"
            ></input>
          </form>
        </div>
      );
    }
    return (
      <div>
        {studentName}
        _______________________________________________________
        {questions}
      </div>
    );
  }
}
