import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import UserGreeting from './UserGreeting'


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      results: [],
      loggedIn: false
    }
  }

  componentDidMount() {


    fetch('https://swapi.co/api/people/').then((response) => response.json()).then((finalResponse) => {

      this.setState({
        results: finalResponse.results
      })
    })
  }

  handleUsername = (e) => {
   
    this.setState({ username: e.target.value });

  }

  handlePassword = (e) => {
   
    this.setState({ password: e.target.value });
  }


  handleClick() {

    if (this.state.results.length > 0) {
      let count = 0;
      this.state.results.map((res) => {

        if (res.name === this.state.username && res.birth_year === this.state.password) {
          count++;
          return res;
        }
        return null
      });


      if (count > 0) {
        console.log("login matched")
        this.setState({ loggedIn: true })
      }
      else {

        console.log(" Not a valid star wars character")

      }
    }
    else {
      alert("HINT: UserName: Luke Skywalker password: 19BBY");
      }
  } 

  render() {

    return (
      <div className ="login">
        <MuiThemeProvider>
          {this.state.loggedIn ? <UserGreeting results = {this.state.results} /> :
          ( <div>
              <AppBar
                title="Login"
              />
              <TextField
                hintText="Enter your Username"
                floatingLabelText="Star Wars Character Name"
                onChange={this.handleUsername}
               />
              <br />
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Star Wars birth year"
                onChange={this.handlePassword}
              />
              <br />
              <RaisedButton
                label="Submit"
                primary={true}
                style={style}
                onClick={() => this.handleClick()}
              />
              <RaisedButton
                label="Reset"
                primary={true}
                style={style}
                onClick = {this.clear}
              />
            </div>)
          }
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};

export default Login;
