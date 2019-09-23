import React, { Component } from "react";
var firebase = require('firebase/app');


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

export default class Auth extends Component {

constructor(props){
    super(props);

    this.state={
     error:''
    }
    this.login=this.login.bind(this);
    this.signup=this.signup.bind(this);
}
login(event)
{
    const email=this.refs.email.value;
    const pass=this.refs.pass.value;
    console.log(email)
    console.log(pass)
    const auth=firebase.auth();
     const promise=auth.signInWithEmailAndPassword(email,pass);

     promise.catch(e=>{
         var err=e.message;
         console.log(err);
         this.setState({error:err})
     })
}
signup(event){
    const email=this.refs.email.value;
    const pass=this.refs.pass.value;
    const auth = firebase.auth();
 const promise = auth.createUserWithEmailAndPassword(email, pass);

 promise
 .then(user => {
   var err = "Welcome "+ user.email;
   firebase.database().ref('users/'+user.uid).set({
     email: user.email
   });
   console.log(user);
   this.setState({error: err});
 });
 promise
 .catch(e => {
   var err = e.message;
   console.log(err);
   this.setState(({error: err}));
 });
}
     

  render() {
    return (
      <div>
      <input id="email" ref="email" type="email" placeholder="Enter your email" /><br />
        <input
          id="pass"
          ref="pass"
          type="password"
          placeholder="enter your password"
        />
        <br />
        <p>{this.state.error}</p>
        <button onClick={this.login}>Sign In</button>
        <button onClick={this.signup}>Sign Up</button>
        <button>Log Out</button>
      </div>
    );
  }
}
