import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import UserGreeting from './UserGreeting'
import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            results: [{}],
            loggedIn: false,
            errorText: ''
        }
    }

    // componentDidMount() {
    //     this.fetchData()
    // }

    componentDidMount() {
        this.getPeople("https://swapi.co/api/people");
      }

    // fetchData = () => {
    //     fetch('https://swapi.co/api/people/').then((response) =>
    //         response.json()).then((finalResponse) => {
    //             this.setState({
    //                 results: finalResponse.results
    //             })
    //         })
    // }

  getPeople = (apiURL) => {
    return axios.get(apiURL).then((res) => {
      console.log("res.data",res.data)
     // console.log("res.data.results",res.data.results)
      // this.showDetail(res.data);

      this.showDetail(res.data);

      const fullData = res.data

      console.log("fullData.results ",fullData.results )

      this.setState({ results: fullData.results })
    })
  }

   showDetail(data) {
    for ( let i = 0; i < data.results.length; i++) {
      var names = names + data.results[i].name + "\n";
      //name1.innerText = name1.innerText + "\n" + data.results[i].name;
    }
    if (data.next) {
      this.getPeople(data.next);
     } 
     else {
      console.log(names); // name1.innerText = names;
    }
  }


    handleUsername = (e) => {
        this.setState({ username: e.target.value });
    }

    handlePassword = (e) => {
        this.setState({ password: e.target.value });
    }

    reset = () => {
        this.setState({
            username: '',
            password: ''
        })
    }

    handleClick() {

        if (this.state.username === "" || this.state.password === "") {

            this.setState({ errorText: 'Enter the Fields' })
        }
        else {
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
                    this.setState({ loggedIn: true })
                }
            }
        }
    }

    render() {

        console.log("this.state.results",this.state.results)
        return (
            <div className="login">

                <MuiThemeProvider>
                    {this.state.loggedIn ? <UserGreeting results={this.state.results} /> :
                        (<div>
                            <AppBar
                                title="Login"
                            />
                            <TextField
                                hintText="Enter your Username"
                                floatingLabelText="Star Wars Character Name"
                                onChange={this.handleUsername}
                                value={this.state.username}
                                errorText={this.state.errorText}
                            />
                            <br />
                            <TextField
                                type="password"
                                hintText="Enter your Password"
                                floatingLabelText="Star Wars birth year"
                                onChange={this.handlePassword}
                                value={this.state.password}
                                errorText={this.state.errorText}
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
                                onClick={this.reset}
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
