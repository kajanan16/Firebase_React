import React, { Component } from "react";
var firebase = require('firebase');
var uuid = require('uuid');

var firebaseConfig = {
  apiKey: "AIzaSyDnFAhXH50x__HSAaE_sM25dLJ0LTtWMzQ",
  authDomain: "my-firebase-6ccaf.firebaseapp.com",
  databaseURL: "https://my-firebase-6ccaf.firebaseio.com",
  projectId: "my-firebase-6ccaf",
  storageBucket: "",
  messagingSenderId: "805936918557",
  appId: "1:805936918557:web:46d94928f4f4d5797516f4"
};
// Initialize Firebase
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
    this.answerSubmit = this.answerSubmit.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }
  mySubmit(event) {
    var studentName = this.refs.name.value;
    this.setState(
      {
        studentName: studentName
      }
    );
  }
  answerSubmit(event) {
    var ans = this.state.answers;
    if (event.target.name === "answer1") {
      ans.answer1 = event.target.value;
    } else if (event.target.name === "answer2") {
      ans.answer2 = event.target.value;
    } else if (event.target.name === "answer3") {
      ans.answer3 = event.target.value;
    }
    this.setState(
      {
        answers: ans
      },
      function() {
        console.log(this.state);
      }
    );
  }
  formSubmit() {
      console.log("formSubmited")
      firebase.database().ref('my-firebase/'+this.state.uid).set({
        studentName: this.state.studentName,
        answers: this.state.answers
      });
    this.setState(
      {
        isSubmitted: true
      });
  }

  render() {
    var studentName;
    var questions;

    if (this.state.studentName === "" && this.state.isSubmitted === false) {
      studentName = <div>
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
      questions = "";
    } else if (
      this.state.studentName !== '' &&
      this.state.isSubmitted === false) {
      studentName = <h1>Hey there,{this.state.studentName}</h1>;
      questions =  <div>
          <h2>Here are some questions :</h2>
          <form onSubmit={this.formSubmit}>
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
               <input className="feedback-button" type="submit" value="submit" />
          </form>
        </div>
      } else if (this.state.isSubmitted === true) {
    studentName = <h1>Thanks, {this.state.studentName}</h1>
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
