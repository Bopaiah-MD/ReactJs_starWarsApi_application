import React, { Component } from 'react'
import SearchInput, { createFilter } from 'react-search-input'

class SearchComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      results: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    
    fetch('https://swapi.co/api/planets/').then((response) =>
      response.json()).then((finalResponse) => {
        this.setState({
          results: finalResponse.results
        })
      })
  }

  searchUpdated = (term) => {
    this.setState({ searchTerm: term })
  }

  render() {

    const { results } = this.state
    const KEYS_TO_FILTERS = ['name', 'terrain', 'population', 'diameter', 'climate'];
    const filteredEmails = results.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <div>
        <h1> Search for the Planet Name info.. </h1>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {filteredEmails.map(people => {
          return (
            <div className="mail" key={people.name}>
              <div className="from"> Name: {people.name}</div>
              <div className="from">Terrain: {people.terrain}</div>
              <div className="from">Population: {people.population}</div>
              <div className="from">Diameter: {people.diameter}</div>
              <div className="from">Climate: {people.climate}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default SearchComponent;
