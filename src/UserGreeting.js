import React, { Component } from 'react'
import axios from 'axios'
import './App.css';

import CharInfo from './CharInfo'

class UserGreeting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      planets: [],
      sortedPopulation: []
    }
  }

  componentDidMount() {
    this.getPeople();
  }

  getPeople = () => {
    return axios.get("https://swapi.co/api/planets/").then((res) => {
      this.setState({ planets: res.data.results })
})

  }

  render() {

    const { planets } = this.state

    function compare(a, b) {

      if (( a.population !== undefined || null ) && ( typeof b.population !== undefined || null )) {

        const popA = parseInt(a.population,10);
        const popB = parseInt(b.population,10);

        let comparison = 0;
        if (popA > popB) {
          comparison = 1;
        } else if (popA < popB) {
          comparison = -1;
        }
        return comparison;
      }

    }

    let sortedResultSet = planets.sort(compare);

    return (
      <div className="login-body">

        <h1 className="trend-css" >Star Wars Character and planets Info</h1>

        <span className="logout-style" > <a href="./Login.js">LOGOUT</a> </span>

        <p className="trend-css">“Traveling through hyperspace ain't like dusting crops, farm boy.” </p>

        <div className="planets-items-alignmnet">
          {
            sortedResultSet.map((p) => {
              return (
                <div key={p.name} >
                  <h3 className="planet-header"> {p.name}</h3>
                  <CharInfo charInfo={p} />

                </div>
              )

            })
          }
        </div>

      </div>
    )
  }


}

export default UserGreeting;