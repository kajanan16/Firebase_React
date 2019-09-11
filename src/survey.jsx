import React, { Component } from "react";
import firebase from "firebase/app";
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
    this.mySubmit = this.mySubmit.bind(this);
  }
  mySubmit(event) {
    var studentName = this.refs.name.value;
    this.setState(
      {
        studentName: studentName
      },
      function() {
        console.log(this.state);
      }
    );
  }
  answerSubmit() {
    //
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
      questions = "";
    } else if (
      this.state.studentName != "" &&
      this.state.isSubmitted == false
    ) {
      studentName = <h1>Hey there,{this.state.studentName}</h1>;
      questions = (
        <div>
          <h2>Here are some questions :</h2>
          <form>
            <div className="card">
              <label>What kind of course you like most :</label>
              <p></p>
              <input
                type="radio"
                name="answer1"
                value="Engineering"
                onChange={this.answerSubmit}
              />
              Engineering
              <input
                type="radio"
                name="answer1"
                value="Technoglogy"
                onChange={this.answerSubmit}
              />
              Technoglogy
              <input
                type="radio"
                name="answer1"
                value="Design"
                onChange={this.answerSubmit}
              />
              Design
            </div>
            <div className="card">
              <label>What kind of Leaning Method You Prefer :</label>
              <p></p>
              <input
                type="radio"
                name="answer2"
                value="Online"
                onChange={this.answerSubmit}
              />
              Online
              <input
                type="radio"
                name="answer2"
                value="ClassRoom"
                onChange={this.answerSubmit}
              />
              ClassRoom
              <input
                type="radio"
                name="answer2"
                value="Industy Base"
                onChange={this.answerSubmit}
              />
              Industy Base
            </div>
            <div className="card">
              <label>You are :</label>
              <p></p>
              <input
                type="radio"
                name="answer3"
                value="Student"
                onChange={this.answerSubmit}
              />
              Student
              <input
                type="radio"
                name="answer3"
                value="Employee"
                onChange={this.answerSubmit}
              />
              Employee
              <input
                type="radio"
                name="answer3"
                value="Others"
                onChange={this.answerSubmit}
              />
              Others
            </div>
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
